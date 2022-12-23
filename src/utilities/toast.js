import { toast } from "react-toastify";
import React from "react";
import { Translation } from "react-i18next";

export const showSuccess = (message) => {
  toast.success(
    <Translation>
      {(t, { i18n }) => (
        <p className="toast-message text-center">{t(message)}</p>
      )}
    </Translation>,
    {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
};

export const showError = (message) => {
  toast.error(
    <Translation>
      {(t, { i18n }) => (
        <p className="toast-message text-center">{t(message)}</p>
      )}
    </Translation>,
    {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
};

export const showWarning = (message) => {
  toast.warn(
    <p className="toast-message text-center">{message}</p>,
    {
      position: "top-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
};
