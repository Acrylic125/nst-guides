CREATE TABLE public.checkbox_casestudy_1_1 (
    id bigint NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    option_1 boolean NOT NULL,
    option_2 boolean DEFAULT false NOT NULL,
    option_3 boolean DEFAULT false NOT NULL
);


--
-- TOC entry 249 (class 1259 OID 26773)
-- Name: checkbox_casestudy_1_1_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.checkbox_casestudy_1_1 ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.checkbox_casestudy_1_1_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 250 (class 1259 OID 26774)
-- Name: checkbox_casestudy_1_2; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.checkbox_casestudy_1_2 (
    id bigint NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    option_1 boolean NOT NULL,
    option_2 boolean NOT NULL,
    option_3 boolean NOT NULL
);


--
-- TOC entry 251 (class 1259 OID 26778)
-- Name: checkbox_casestudy_1_2_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

ALTER TABLE public.checkbox_casestudy_1_2 ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.checkbox_casestudy_1_2_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 2886 (class 0 OID 26767)
-- Dependencies: 248
-- Data for Name: checkbox_casestudy_1_1; Type: TABLE DATA; Schema: public; Owner: -
--
INSERT INTO public.checkbox_casestudy_1_1 (id, created_at, option_1, option_2, option_3)
  VALUES (1, '2022-10-14 00:42:39.313115+00', true, false, false);


--
-- TOC entry 2900 (class 0 OID 0)
-- Dependencies: 249
-- Name: checkbox_casestudy_1_1_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.checkbox_casestudy_1_1_id_seq', 3, true);


--
-- TOC entry 2901 (class 0 OID 0)
-- Dependencies: 251
-- Name: checkbox_casestudy_1_2_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.checkbox_casestudy_1_2_id_seq', 26, true);


--
-- TOC entry 2738 (class 2606 OID 26831)
-- Name: checkbox_casestudy_1_1 checkbox_casestudy_1_1_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.checkbox_casestudy_1_1
    ADD CONSTRAINT checkbox_casestudy_1_1_pkey PRIMARY KEY (id);


--
-- TOC entry 2740 (class 2606 OID 26833)
-- Name: checkbox_casestudy_1_2 checkbox_casestudy_1_2_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.checkbox_casestudy_1_2
    ADD CONSTRAINT checkbox_casestudy_1_2_pkey PRIMARY KEY (id);


--
-- TOC entry 2884 (class 3256 OID 26913)
-- Name: checkbox_casestudy_1_1 Enable read access for all users; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Enable read access for all users" ON public.checkbox_casestudy_1_1 FOR SELECT USING (true);


--
-- TOC entry 2895 (class 0 OID 0)
-- Dependencies: 15
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT USAGE ON SCHEMA public TO anon;
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT USAGE ON SCHEMA public TO service_role;


--
-- TOC entry 2896 (class 0 OID 0)
-- Dependencies: 248
-- Name: TABLE checkbox_casestudy_1_1; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.checkbox_casestudy_1_1 TO postgres;
GRANT ALL ON TABLE public.checkbox_casestudy_1_1 TO anon;
GRANT ALL ON TABLE public.checkbox_casestudy_1_1 TO authenticated;
GRANT ALL ON TABLE public.checkbox_casestudy_1_1 TO service_role;


--
-- TOC entry 2897 (class 0 OID 0)
-- Dependencies: 249
-- Name: SEQUENCE checkbox_casestudy_1_1_id_seq; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON SEQUENCE public.checkbox_casestudy_1_1_id_seq TO postgres;
GRANT ALL ON SEQUENCE public.checkbox_casestudy_1_1_id_seq TO anon;
GRANT ALL ON SEQUENCE public.checkbox_casestudy_1_1_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.checkbox_casestudy_1_1_id_seq TO service_role;


--
-- TOC entry 2898 (class 0 OID 0)
-- Dependencies: 250
-- Name: TABLE checkbox_casestudy_1_2; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON TABLE public.checkbox_casestudy_1_2 TO postgres;
GRANT ALL ON TABLE public.checkbox_casestudy_1_2 TO anon;
GRANT ALL ON TABLE public.checkbox_casestudy_1_2 TO authenticated;
GRANT ALL ON TABLE public.checkbox_casestudy_1_2 TO service_role;


--
-- TOC entry 2899 (class 0 OID 0)
-- Dependencies: 251
-- Name: SEQUENCE checkbox_casestudy_1_2_id_seq; Type: ACL; Schema: public; Owner: -
--

GRANT ALL ON SEQUENCE public.checkbox_casestudy_1_2_id_seq TO postgres;
GRANT ALL ON SEQUENCE public.checkbox_casestudy_1_2_id_seq TO anon;
GRANT ALL ON SEQUENCE public.checkbox_casestudy_1_2_id_seq TO authenticated;
GRANT ALL ON SEQUENCE public.checkbox_casestudy_1_2_id_seq TO service_role;


--
-- TOC entry 2349 (class 826 OID 26923)
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: public; Owner: -
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES  TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES  TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES  TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES  TO service_role;


--
-- TOC entry 2342 (class 826 OID 26924)
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: public; Owner: -
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON SEQUENCES  TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON SEQUENCES  TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON SEQUENCES  TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON SEQUENCES  TO service_role;


--
-- TOC entry 2343 (class 826 OID 26925)
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: public; Owner: -
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS  TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS  TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS  TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS  TO service_role;


--
-- TOC entry 2344 (class 826 OID 26926)
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: public; Owner: -
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON FUNCTIONS  TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON FUNCTIONS  TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON FUNCTIONS  TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON FUNCTIONS  TO service_role;


--
-- TOC entry 2345 (class 826 OID 26927)
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: -
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES  TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES  TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES  TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES  TO service_role;


--
-- TOC entry 2346 (class 826 OID 26928)
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: -
--

ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON TABLES  TO postgres;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON TABLES  TO anon;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON TABLES  TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE supabase_admin IN SCHEMA public GRANT ALL ON TABLES  TO service_role;


-- Completed on 2022-12-22 20:23:20

--
-- PostgreSQL database dump complete
--

