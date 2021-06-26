import { useEffect } from 'react';
import { DashboardOutlined, RecentActorsOutlined, BrokenImageOutlined, SettingsOutlined,LensOutlined } from '@material-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const items = [
  {
    href: '/app/dashboard',
    icon: DashboardOutlined,
    title: 'Dashboard'
  },
  {
    href: '/app/contactpersonList',
    icon: RecentActorsOutlined,
    title: 'Contact Person List'
  },
  {
    href: '/app/report',
    icon: BrokenImageOutlined,
    title: 'Report'
  },  
  {
    href: '/app/setting',
    icon: SettingsOutlined,
    title: 'Report'
  },
  {
    submenu: [{
      href: '/app/submenu/managelayout',
      icon: LensOutlined,
      title: 'Manage Layout'
    },{
      href: '/app/submenu/member',
      icon: LensOutlined,
      title: 'Member'
    },{
      href: '/app/submenu/dataaccess',
      icon: LensOutlined,
      title: 'Data Access'
    },{
      href: '/app/submenu/systemlog',
      icon: LensOutlined,
      title: 'System Log'
    }]
  }
]
