import React from 'react';
import DocumentText from '../icons/document-text';
import Mail from '../icons/mail';
import Menu from '../icons/menu';
import Terminal from '../icons/terminal';
import User from '../icons/user';

function Icon({ name, className }) {
  const icons = {
    'document-text': <DocumentText className={className} />,
    mail: <Mail className={className} />,
    menu: <Menu className={className} />,
    terminal: <Terminal className={className} />,
    user: <User className={className} />,
  };

  return icons[name] || null;
}

export default Icon;
