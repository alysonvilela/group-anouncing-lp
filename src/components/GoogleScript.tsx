import Script from 'next/script'

export function GoogleScript() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-395441137"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-395441137');
        `}
      </Script>
    </>
  )
}

export function trackConversion() {
  if (typeof window !== 'undefined') {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-395441137/0AH3COORpcIbEPHnx7wB',
      })
    } else if (window.dataLayer) {
      window.dataLayer.push({
        event: 'conversion',
        send_to: 'AW-395441137/0AH3COORpcIbEPHnx7wB',
      })
    }
  }
}
