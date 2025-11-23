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
      <Script id="google-conversion-tracking" strategy="afterInteractive">
        {`
          (function() {
            function trackExitClick(event) {
              const link = event.currentTarget;
              const href = link.getAttribute('href');
              
              if (!href) return;
              
              const currentHost = window.location.hostname;
              const linkUrl = new URL(href, window.location.href);
              const linkHost = linkUrl.hostname;
              
              if (linkHost && linkHost !== currentHost) {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'conversion', {
                    'send_to': 'AW-395441137/CONVERSION_LABEL',
                    'value': 0,
                    'currency': 'BRL'
                  });
                }
              }
            }
            
            function attachExitClickListeners() {
              const links = document.querySelectorAll('a[href^="http"], a[href^="https"]');
              links.forEach(function(link) {
                link.addEventListener('click', trackExitClick);
              });
            }
            
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', attachExitClickListeners);
            } else {
              attachExitClickListeners();
            }
            
            const observer = new MutationObserver(function(mutations) {
              attachExitClickListeners();
            });
            
            observer.observe(document.body, {
              childList: true,
              subtree: true
            });
          })();
        `}
      </Script>
    </>
  )
}
