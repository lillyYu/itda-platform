import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { IntlProvider } from "react-intl";
import enUsMsg from "lang/en-US.json";
import koMsg from "lang/ko.json";
import { BrowserRouter } from 'react-router-dom';
import { GeneralProvider } from 'utils/context/GeneralContext';

// TODO: setting default language here
const locale = localStorage.getItem("locale") ?? "ko";
const messages = { "en-US": enUsMsg, "ko": koMsg }[locale];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <IntlProvider locale={locale} defaultLocale='ko' messages={messages}>
        <GeneralProvider>
          <App />
        </GeneralProvider>
      </IntlProvider>
    </BrowserRouter>
  </React.StrictMode>
);

