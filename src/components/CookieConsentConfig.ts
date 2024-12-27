import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom left',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {
      services: {
        ga4: {
          label:
            '<a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank">Google Analytics 4 (dummy)</a>',
          onAccept: () => {
            console.log('ga4 accepted');
            // TODO: load ga4
          },
          onReject: () => {
            console.log('ga4 rejected');
          },
          cookies: [
            {
              name: /^_ga/,
            },
          ],
        },
        another: {
          label: 'Another one (dummy)',
        },
      },
    },
  },
  language: {
    default: 'en',
    autoDetect: 'browser',
    translations: {
      en: {
        consentModal: {
          title: "Questo sito utilizza i cookie",
          description:
            'Se per te va bene clicca su Accetta tutti e continua a navigare',
          acceptAllBtn: 'Accetta tutti',
          acceptNecessaryBtn: 'Rifiuta',
          showPreferencesBtn: 'Preferenze',
          footer:
            '<a href="/privacy">Privacy Policy</a>',
        },
        preferencesModal: {
          title: 'Preferenze consenso privacy',
          acceptAllBtn: 'Accetta tutto',
          acceptNecessaryBtn: 'Rifiuta',
          savePreferencesBtn: 'Salva preferenze',
          closeIconLabel: 'Chiudi',
          serviceCounterLabel: 'Servizi',
          sections: [
            {
              title: 'Uso dei Cookie',
              description:
                "Casavacenzelavecchiafonte.it utilizza i cookie, utilizza informazioni non sensibili presenti nel tuo dispositivo per migliorare l'esperienza utente di questo sito. Puoi accettare tutte o parte di queste operazioni.",
            },
            {
              title:
                'Cookies essenziali<span class="pm__badge">Sempre attivi</span>',
              description:
                "Questi cookie garantiscono il corretto funzionamento del sito, quindi non possono essere rifiutati. Ad esempio, questi cookie ci aiutano a bloccare lo spam e a introdurre nuove funzionalità in sicurezza. Questo scopo è richiesto per il corretto funzionamento del sito Web e non può essere disattivato.",
              linkedCategory: 'necessary',
            },
            {
              title: 'Cookies funzionali',
              description:
                "Questi cookie sono utilizzati per migliorare le prestazioni e la funzionalità del sito Web, e salvare le preferenze dell’utente",
              linkedCategory: 'functionality',
            },
            {
              title: 'Cookies Analitici',
              description:
                "Questi cookie ci aiutano a comprendere meglio come usi il sito, quali funzionalità sono più utili per te e cosa possiamo migliorare. Se crei un account, useremo un cookie che associa tali informazioni al tuo account. Inoltre, i cookie analitici abilitano Microsoft Clarity, che rileva il modo in cui interagisci con il nostro sito web in singole sessioni di ricerca attraverso metriche comportamentali. Queste informazioni vengono usate per ottimizzare il sito web e gli annunci, oltre che per la protezione antifrode.",
              linkedCategory: 'analytics',
            },
            {
              title: 'Più informazioni',
              description:
                'Maggiori informazioni sulla pagine della <a class="cc__link" href="/privacy">privacy policy</a>.',
            },
          ],
        },
      },
    },
  },
};
