PGDMP                         z         
   hitogrupal    14.2 (Debian 14.2-1.pgdg110+1)    14.2     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16386 
   hitogrupal    DATABASE     ^   CREATE DATABASE hitogrupal WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';
    DROP DATABASE hitogrupal;
                admin    false            ?            1259    16425    usuarios    TABLE       CREATE TABLE public.usuarios (
    iduser integer NOT NULL,
    usuario character varying(30),
    email character varying(50),
    "contraseña" character varying(400),
    foto character varying(400),
    pregunta character varying(50),
    respuesta character varying(50)
);
    DROP TABLE public.usuarios;
       public         heap    admin    false            ?            1259    16424    usuarios_iduser_seq    SEQUENCE     ?   CREATE SEQUENCE public.usuarios_iduser_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.usuarios_iduser_seq;
       public          admin    false    210                        0    0    usuarios_iduser_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.usuarios_iduser_seq OWNED BY public.usuarios.iduser;
          public          admin    false    209            ?            1259    16434    vistas    TABLE     ?   CREATE TABLE public.vistas (
    idvista integer NOT NULL,
    cabecera text,
    cuerpo text,
    footer text,
    iduser integer,
    inputs text,
    nombrevista character varying(30)
);
    DROP TABLE public.vistas;
       public         heap    admin    false            ?            1259    16433    vistas_idvista_seq    SEQUENCE     ?   CREATE SEQUENCE public.vistas_idvista_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.vistas_idvista_seq;
       public          admin    false    212                       0    0    vistas_idvista_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.vistas_idvista_seq OWNED BY public.vistas.idvista;
          public          admin    false    211            d           2604    16428    usuarios iduser    DEFAULT     r   ALTER TABLE ONLY public.usuarios ALTER COLUMN iduser SET DEFAULT nextval('public.usuarios_iduser_seq'::regclass);
 >   ALTER TABLE public.usuarios ALTER COLUMN iduser DROP DEFAULT;
       public          admin    false    209    210    210            e           2604    16437    vistas idvista    DEFAULT     p   ALTER TABLE ONLY public.vistas ALTER COLUMN idvista SET DEFAULT nextval('public.vistas_idvista_seq'::regclass);
 =   ALTER TABLE public.vistas ALTER COLUMN idvista DROP DEFAULT;
       public          admin    false    211    212    212            ?          0    16425    usuarios 
   TABLE DATA           d   COPY public.usuarios (iduser, usuario, email, "contraseña", foto, pregunta, respuesta) FROM stdin;
    public          admin    false    210          ?          0    16434    vistas 
   TABLE DATA           `   COPY public.vistas (idvista, cabecera, cuerpo, footer, iduser, inputs, nombrevista) FROM stdin;
    public          admin    false    212   ?                  0    0    usuarios_iduser_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.usuarios_iduser_seq', 1, false);
          public          admin    false    209                       0    0    vistas_idvista_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.vistas_idvista_seq', 3, true);
          public          admin    false    211            g           2606    16432    usuarios usuarios_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (iduser);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public            admin    false    210            i           2606    16441    vistas vistas_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.vistas
    ADD CONSTRAINT vistas_pkey PRIMARY KEY (idvista);
 <   ALTER TABLE ONLY public.vistas DROP CONSTRAINT vistas_pkey;
       public            admin    false    212            j           2606    16442    vistas vistas_iduser_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public.vistas
    ADD CONSTRAINT vistas_iduser_fkey FOREIGN KEY (iduser) REFERENCES public.usuarios(iduser);
 C   ALTER TABLE ONLY public.vistas DROP CONSTRAINT vistas_iduser_fkey;
       public          admin    false    212    210    3175            ?      x?3?LN,?M?????CF\1z\\\ ??P      ?   ?  x??Ymo?6???
B??S?I???6H?CWٷ%?m???QT?_?7???HJ?,??Km7?Z8Q?????????O)??c?@X<?"B?z?j	??z???7~? }??ł?P? ??4???x??J, ҂@?49?s??????$?#o"R?g?/????8iD???HU??g?a??P?s2?3-???pΌs?LI???7?Zf?A ??\?q?<I?@'??g??)d?????WW???_.??W?~????????????#~οȩG"N?l???s{d?b=y??O(?#?+7
???Y?]??I`0?)?)?,??????S?????À???eפ4%??v???ɻ'BhPց??6????|A??d?G?9??
?/????WT??x??&??{'??:???????S@??????W??4?)??Tf?)???~??ZL?&M导"?????F?><J??4?P???v?6:??mL?-??A???^??F????{?U???(?U?-i?T!?6?",i%?nbk$K5U???0̵???6??B?Gî{?????(?,#??i?Y?u?ѩ?)U?L?\??>?"Y???a??ug?3?XC?V??0?5?c??-p,c$?	B?e?s??iF?)?{/gPU!??H#y?<y<???֪?V??Vq6?hu?V??????m??/X*s]$Nã?Jf??_?c.?_a??'驉
N]?????T??Ưx[S"?a%w[?V????b?f?Rt"2?A?o??笮???W!@?-????N?$4xU?23?$???"3??iB??[?b?Aco?b	?%??.vI?4????.w[???1r>??s???3CZϷ[i??m??mXf??5?????L?? ??2p???5???8?Q*???Tg??`G?dt?P[k??14?#??GU$	]?[꺵>??r+-u?fuUQ?R???n?q??????.???P?E*?1??
?=???׬6&?c??sq?A՝(?2??]?;?n??Pċu{lL??sS??q&?u??v=???*??rg??}ڨ[?6 m?> :ז????zlE??ݦ??F?,?????L??';Q??	?)TnϣTohN\?\??KUy?/??<?;?;ͳ?Y??z/	Z??:?Y??*V?ɫ?5Pw4?RӇkRm??ߤ??5?6?ohR{??Ԥ?(?u?????M?N???=?Fp? ;J_r?wiK?F?1
hP{%?enZ ??7?b?z/]?r?[ol?"K#&)?2b??;??E?yի)?Jp2??W$y4Z?{%%?Z/??\3??s??&Z??ƭ??|?zdf?HV٩???.?q?	~????)P4??&???L??vmf?????)Q?2sW???????Ć?solNVwj??O񱠶?@??ա??U??M???ui?s*N??
??:I?Zt?b??Ȼ??"???X??٧󳳳???     