import React from 'react';
import DocumentText from '../icons/document-text';
import DotsHorizontal from '../icons/dots-horizontal';
import ExternalLink from '../icons/external-link';
import Github from '../icons/github';
import LinkedIn from '../icons/linkedin';
import Mail from '../icons/mail';
import Menu from '../icons/menu';
import Terminal from '../icons/terminal';
import User from '../icons/user';
import X from '../icons/x';

function Icon({ name, className }) {
  const icons = {
    'document-text': <DocumentText className={className} />,
    'dots-horizontal': <DotsHorizontal className={className} />,
    'external-link': <ExternalLink className={className} />,
    github: <Github className={className} />,
    linkedin: <LinkedIn className={className} />,
    mail: <Mail className={className} />,
    menu: <Menu className={className} />,
    terminal: <Terminal className={className} />,
    user: <User className={className} />,
    x: <X className={className} />,
  };

  return icons[name] || null;
}

export default Icon;
