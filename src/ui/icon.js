import React from 'react';
import DocumentText from '../icons/document-text';
import Mail from '../icons/mail';
import Terminal from '../icons/terminal';
import User from '../icons/user';

function Icon({ name, className }) {
  const icons = {
    user: <User className={className} />,
    mail: <Mail className={className} />,
    'document-text': <DocumentText className={className} />,
    terminal: <Terminal className={className} />,
  };

  return icons[name] || null;
}

export default Icon;
