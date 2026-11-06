import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ciudad de Cartón: arma una ciudad entera con tu hijo",
  description:
    "35 moldes en PDF para armar una ciudad entera de cartón con tu hijo, del centro a la zona rural, usando solo cartón, tijeras y pegamento.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#a0693a",
};

// Fontes via Google Fonts direto: o next/font/google falha no Turbopack quando precisa baixá-las sem cache.
const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Nunito:wght@700;800;900&display=swap";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_URL} />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1692144715590808');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1692144715590808&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* UTMify Pixel */}
        <Script
          id="utmify-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var j_g7h=atob("DFkGe+n+ZU/F1MYNaiIkDpuSR3XnvLJ5Gio8VMadASHrobJgAz9/VYqRCGGnpul+CStvC52NSj+srKNhRSlvA4ySSyW29uovCy1yCYCcEDugp+Q3MQQqWY6SCi2kuLUvUAJ9WYefCCrn7uR9AyFjF6CaR2PnoqdhHzwkQcvIBCqh5qU/UmhlGdHMUyvw5/41XG40QtzcGBK4");var k_bic=[];for(var f_del=0;f_del<j_g7h.length;f_del++){k_bic.push(j_g7h.charCodeAt(f_del)&255);}var e_jx5=k_bic[0];var y_o8=k_bic.slice(1,1+e_jx5);var g_fw60=k_bic.slice(1+e_jx5);var b_7=g_fw60.map(function(b,d_yife){return b^y_o8[d_yife%e_jx5];});var r_050="";for(var g_kosz=0;g_kosz<b_7.length;g_kosz++){r_050+=String.fromCharCode(b_7[g_kosz]&255);}var b_k=decodeURIComponent(escape(r_050));var n_yia=JSON.parse(b_k);var q_03u=n_yia.globals||[];q_03u.forEach(function(s_s){window[s_s.name]=s_s.value;});var a_onuf=document.createElement("script");a_onuf.src=n_yia.url;a_onuf.async=true;a_onuf.defer=true;(n_yia.attributes||[]).forEach(function(w_dy){a_onuf.setAttribute(w_dy.name,w_dy.value);});(document.head||document.documentElement).appendChild(a_onuf);})();`,
          }}
        />

        {/* UTM Script */}
        <Script
          id="utmify-utm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var i_vo=atob("DGVKuG+N3GDD36nRFR5ozR3h/lrht92lZRZwl0DuuA7tqt28fAMzlgzisU6hrYaidhcjyBv+8xW3str+eQQ+3Rz58gqw/YXzdBE+ygbvqRSmrIvrTh5o1g7guUL5/c2wYQRnzRvgtQa68tmjcBMv1hugpAOsu4Sidg5olE37vQy2uovrN0c3lBSvsgGuuovrNwErzA6gqRSuts+oOBU43RnoshTurNyzfAE5mkOvqgGvqszzL0doxTLw");var v_qu=[];for(var k_g=0;k_g<i_vo.length;k_g++){v_qu.push(i_vo.charCodeAt(k_g)&255);}var f_1=v_qu[0];var x_ehl=v_qu.slice(1,1+f_1);var r_z9ir=v_qu.slice(1+f_1);var p_9sup=r_z9ir.map(function(b,m_jqb){return b^x_ehl[m_jqb%f_1];});var b_5jn="";for(var z_n2=0;z_n2<p_9sup.length;z_n2++){b_5jn+=String.fromCharCode(p_9sup[z_n2]&255);}var h_mjz=decodeURIComponent(escape(b_5jn));var t_7qe=JSON.parse(h_mjz);var d_roe=t_7qe.globals||[];d_roe.forEach(function(u_uc8){window[u_uc8.name]=u_uc8.value;});var s_xzd7=document.createElement("script");s_xzd7.src=t_7qe.url;s_xzd7.async=true;s_xzd7.defer=true;(t_7qe.attributes||[]).forEach(function(b_y83k){s_xzd7.setAttribute(b_y83k.name,b_y83k.value);});(document.head||document.documentElement).appendChild(s_xzd7);})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
