import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  UserCheck01Icon,
  Notebook01Icon,
  DiplomaIcon,
  GraduationCapIcon,
  Megaphone01Icon,
  Calendar01Icon,
  Clock01Icon,
  Wallet01Icon,
  Payment01Icon,
  Bus01Icon,
  LibraryIcon,
  StethoscopeIcon,
  SparkleIcon,
  AiSparklesIcon,
  TelephoneIcon,
  Building01Icon,
  BedBunkIcon,
  CheckmarkCircle01Icon,
  ArrowRight01Icon,
  ArrowLeft01Icon,
  SmartPhone01Icon,
  Mail01Icon,
  Location01Icon,
  HeadsetIcon,
  Menu01Icon,
  Cancel01Icon,
  UserAdd01Icon,
  UserGroupIcon,
  UserMultiple02Icon,
  Invoice01Icon,
  PackageIcon,
  Analytics01Icon,
  IndianRupeeIcon,
  SchoolIcon,
  TeacherIcon,
  Award01Icon,
  DocumentCodeIcon,
  File01Icon,
  CheckmarkBadge01Icon,
  DashboardSquare01Icon,
} from '@hugeicons/core-free-icons';

export interface HugeIconProps {
  icon: any;
  size?: number | string;
  className?: string;
  strokeWidth?: number;
  color?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
}

export const HugeIcon: React.FC<HugeIconProps> = ({
  icon,
  size = 20,
  className = '',
  strokeWidth = 1.6,
  color,
  'aria-hidden': ariaHidden = true,
}) => {
  return (
    <HugeiconsIcon
      icon={icon}
      size={size}
      className={className}
      strokeWidth={strokeWidth}
      color={color}
      aria-hidden={ariaHidden}
    />
  );
};

// Re-export all the authentic school & ERP icons
export {
  UserCheck01Icon,
  Notebook01Icon,
  DiplomaIcon,
  GraduationCapIcon,
  Megaphone01Icon,
  Calendar01Icon,
  Clock01Icon,
  Wallet01Icon,
  Payment01Icon,
  Bus01Icon,
  LibraryIcon,
  StethoscopeIcon,
  SparkleIcon,
  AiSparklesIcon,
  TelephoneIcon,
  Building01Icon,
  BedBunkIcon,
  CheckmarkCircle01Icon,
  ArrowRight01Icon,
  ArrowLeft01Icon,
  SmartPhone01Icon,
  Mail01Icon,
  Location01Icon,
  HeadsetIcon,
  Menu01Icon,
  Cancel01Icon,
  UserAdd01Icon,
  UserGroupIcon,
  UserMultiple02Icon,
  Invoice01Icon,
  PackageIcon,
  Analytics01Icon,
  IndianRupeeIcon,
  SchoolIcon,
  TeacherIcon,
  Award01Icon,
  DocumentCodeIcon,
  File01Icon,
  CheckmarkBadge01Icon,
  DashboardSquare01Icon,
};
