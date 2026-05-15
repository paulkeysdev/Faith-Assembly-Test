-- Create app roles enum
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create user_roles table for admin access
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function for role checking
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policies for user_roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all roles"
ON public.user_roles
FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Create profiles table
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
    full_name TEXT,
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Profiles are viewable by everyone"
ON public.profiles FOR SELECT USING (true);

CREATE POLICY "Users can update their own profile"
ON public.profiles FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile"
ON public.profiles FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create events table
CREATE TABLE public.events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    event_date DATE NOT NULL,
    event_time TIME,
    end_time TIME,
    location TEXT,
    image_url TEXT,
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Events are viewable by everyone"
ON public.events FOR SELECT USING (true);

CREATE POLICY "Admins can manage events"
ON public.events FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Create daily_words table
CREATE TABLE public.daily_words (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    scripture_reference TEXT NOT NULL,
    scripture_text TEXT NOT NULL,
    devotional_content TEXT,
    publish_date DATE NOT NULL UNIQUE,
    author TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.daily_words ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Daily words are viewable by everyone"
ON public.daily_words FOR SELECT USING (true);

CREATE POLICY "Admins can manage daily words"
ON public.daily_words FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Create prayer_requests table
CREATE TABLE public.prayer_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    request TEXT NOT NULL,
    is_private BOOLEAN DEFAULT true,
    is_answered BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.prayer_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit prayer requests"
ON public.prayer_requests FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view all prayer requests"
ON public.prayer_requests FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage prayer requests"
ON public.prayer_requests FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Create newsletter_subscribers table
CREATE TABLE public.newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL UNIQUE,
    name TEXT,
    is_active BOOLEAN DEFAULT true,
    subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
ON public.newsletter_subscribers FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view subscribers"
ON public.newsletter_subscribers FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage subscribers"
ON public.newsletter_subscribers FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Create media_gallery table
CREATE TABLE public.media_gallery (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    media_type TEXT NOT NULL CHECK (media_type IN ('image', 'video')),
    url TEXT NOT NULL,
    thumbnail_url TEXT,
    category TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.media_gallery ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Media is viewable by everyone"
ON public.media_gallery FOR SELECT USING (true);

CREATE POLICY "Admins can manage media"
ON public.media_gallery FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Create leadership_team table
CREATE TABLE public.leadership_team (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    title TEXT NOT NULL,
    bio TEXT,
    image_url TEXT,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.leadership_team ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Leadership is viewable by everyone"
ON public.leadership_team FOR SELECT USING (true);

CREATE POLICY "Admins can manage leadership"
ON public.leadership_team FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Add triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_events_updated_at
    BEFORE UPDATE ON public.events
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_daily_words_updated_at
    BEFORE UPDATE ON public.daily_words
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();