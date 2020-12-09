import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/signup',
    component: () => import('@/views/register/index'),
    hidden: true
  },
  {
    path: '/reset-password',
    component: () => import('@/views/reset-password/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/job',
    component: Layout,
    redirect: '/job/list',
    name: 'Job',
    meta: {
      title: 'Job',
      icon: 'el-icon-s-cooperation'
    },
    children: [
      // Edit route of components
      {
        path: 'create',
        component: () => import('@/views/job/create'),
        name: 'CreateJob',
        meta: { title: 'New Job', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/job/edit'),
        name: 'EditJob',
        meta: { title: 'Edit Job', noCache: true, activeMenu: '/job/list' },
        hidden: true
      },
      {
        path: 'reopen/:id(\\d+)',
        component: () => import('@/views/job/reopen'),
        name: 'ReopenJob',
        meta: { title: 'Reopen Job', noCache: true, activeMenu: '/job/list' },
        hidden: true,
        props: true
      },
      {
        path: 'list',
        component: () => import('@/views/job/list'),
        name: 'JobList',
        meta: { title: 'Job List', icon: 'list' }
      },
      {
        path: 'candidates/:id(\\d+)',
        component: () => import('@/views/job/candidate'),
        name: 'CandidateList',
        meta: { title: 'Candidate List' },
        hidden: true
      }
    ]
  },

  // {
  //   path: '/talent-pool',
  //   component: Layout,
  //   redirect: '/talent-pool/list',
  //   name: 'TalentPool',
  //   meta: {
  //     title: 'Talent Pool',
  //     icon: 'el-icon-s-custom',
  //     roles: ['admin']
  //   },
  //   children: [
  //     // Edit route of components
  //     {
  //       path: 'create',
  //       component: () => import('@/views/example/create'),
  //       name: 'CreateTalentPool',
  //       meta: { title: 'Create Talent Pool', icon: 'edit' }
  //     },
  //     {
  //       path: 'edit/:id(\\d+)',
  //       component: () => import('@/views/example/edit'),
  //       name: 'EditTalentPool',
  //       meta: { title: 'Edit Talent Pool', noCache: true, activeMenu: '/example/list' },
  //       hidden: true
  //     },
  //     {
  //       path: 'list',
  //       component: () => import('@/views/example/list'),
  //       name: 'TalentPoolList',
  //       meta: { title: 'Talent Pool List', icon: 'list' }
  //     },
  //     {
  //       path: 'candidate-list',
  //       component: () => import('@/views/example/list'),
  //       name: 'CandidateList',
  //       meta: { title: 'Candidate List', icon: 'list' }
  //     }
  //   ]
  // },

  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/page',
  //   alwaysShow: true, // will always show the root menu
  //   name: 'Permission',
  //   meta: {
  //     title: 'PermissionZZZ',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/permission/page'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'Page Permission',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'directive',
  //       component: () => import('@/views/permission/directive'),
  //       name: 'DirectivePermission',
  //       meta: {
  //         title: 'Directive Permission'
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     },
  //     {
  //       path: 'role',
  //       component: () => import('@/views/permission/role'),
  //       name: 'RolePermission',
  //       meta: {
  //         title: 'Role Permission',
  //         roles: ['admin']
  //       }
  //     }
  //   ]
  // },

  {
    path: '/subscription',
    component: Layout,
    redirect: '/subscription/list',
    name: 'Subscription',
    meta: {
      title: 'Subscription',
      icon: 'shopping',
      roles: ['admin']
    },
    children: [
      // Edit route of components
      {
        path: 'create',
        component: () => import('@/views/subscription/create'),
        name: 'CreatePackage',
        meta: { title: 'Create Package', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/subscription/edit'),
        name: 'EditPackage',
        meta: { title: 'Edit Package', noCache: true, activeMenu: '/subscription/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/subscription/list'),
        name: 'PackageList',
        meta: { title: 'Package List', icon: 'list' }
      },
      {
        path: 'member',
        component: () => import('@/views/subscription/member'),
        name: 'Member',
        meta: { title: 'Member', icon: 'peoples' }
      }
    ]
  },

  {
    path: '/account',
    component: Layout,
    redirect: '/account/list',
    name: 'Account',
    meta: {
      title: 'Account',
      icon: 'user',
      roles: ['admin']
    },
    children: [
      // Edit route of components
      {
        path: 'create',
        component: () => import('@/views/account/create'),
        name: 'CreateJob',
        meta: { title: 'Create Account', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/account/edit'),
        name: 'EditJob',
        meta: { title: 'Edit Account', noCache: true, activeMenu: '/example/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/account/list'),
        name: 'JobList',
        meta: { title: 'Account List', icon: 'peoples' }
      },
      {
        path: 'company',
        component: () => import('@/views/account/company_list'),
        name: 'CompanyList',
        meta: { title: 'Company List', icon: 'list' }
      }
    ]
  },

  {
    path: '/purchase',
    component: Layout,
    redirect: '/purchase/index',
    meta: {
      roles: ['user']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/purchase/index'),
        name: 'Purchase',
        meta: { title: 'Purchase', icon: 'shopping', noCache: true }
      }
    ]
  },

  {
    path: '/checkout',
    component: Layout,
    redirect: '/checkout/index',
    meta: {
      roles: ['user']
    },
    children: [
      {
        path: 'index/:id(\\d+)',
        component: () => import('@/views/checkout/index'),
        name: 'Checkout',
        meta: { title: 'Checkout', icon: 'shopping', noCache: true }
      }
    ],
    hidden: true
  },

  {
    path: '/report',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/report/index'),
        name: 'Report',
        meta: { title: 'Report', icon: 'chart', noCache: true }
      }
    ]
  },

  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    // hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  },

  {
    path: '/icon',
    component: Layout,
    meta: {
      roles: ['admin']
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: { title: 'Icons', icon: 'icon', noCache: true }
      }
    ]
  },

  /** when your routing map is too long, you can split it into small modules **/
  // componentsRouter,
  // chartsRouter,
  // nestedRouter,
  // tableRouter,

  // {
  //   path: '/tab',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/tab/index'),
  //       name: 'Tab',
  //       meta: { title: 'Tab', icon: 'tab' }
  //     }
  //   ]
  // },

  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: 'ErrorPages',
  //   meta: {
  //     title: 'Error Pages',
  //     icon: '404'
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: () => import('@/views/error-page/401'),
  //       name: 'Page401',
  //       meta: { title: '401', noCache: true }
  //     },
  //     {
  //       path: '404',
  //       component: () => import('@/views/error-page/404'),
  //       name: 'Page404',
  //       meta: { title: '404', noCache: true }
  //     }
  //   ]
  // },

  // {
  //   path: '/error-log',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'log',
  //       component: () => import('@/views/error-log/index'),
  //       name: 'ErrorLog',
  //       meta: { title: 'Error Log', icon: 'bug' }
  //     }
  //   ]
  // },

  // {
  //   path: '/excel',
  //   component: Layout,
  //   redirect: '/excel/export-excel',
  //   name: 'Excel',
  //   meta: {
  //     title: 'Excel',
  //     icon: 'excel'
  //   },
  //   children: [
  //     {
  //       path: 'export-excel',
  //       component: () => import('@/views/excel/export-excel'),
  //       name: 'ExportExcel',
  //       meta: { title: 'Export Excel' }
  //     },
  //     {
  //       path: 'export-selected-excel',
  //       component: () => import('@/views/excel/select-excel'),
  //       name: 'SelectExcel',
  //       meta: { title: 'Export Selected' }
  //     },
  //     {
  //       path: 'export-merge-header',
  //       component: () => import('@/views/excel/merge-header'),
  //       name: 'MergeHeader',
  //       meta: { title: 'Merge Header' }
  //     },
  //     {
  //       path: 'upload-excel',
  //       component: () => import('@/views/excel/upload-excel'),
  //       name: 'UploadExcel',
  //       meta: { title: 'Upload Excel' }
  //     }
  //   ]
  // },

  // {
  //   path: '/zip',
  //   component: Layout,
  //   redirect: '/zip/download',
  //   alwaysShow: true,
  //   name: 'Zip',
  //   meta: { title: 'Zip', icon: 'zip' },
  //   children: [
  //     {
  //       path: 'download',
  //       component: () => import('@/views/zip/index'),
  //       name: 'ExportZip',
  //       meta: { title: 'Export Zip' }
  //     }
  //   ]
  // },

  // {
  //   path: '/pdf',
  //   component: Layout,
  //   redirect: '/pdf/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/pdf/index'),
  //       name: 'PDF',
  //       meta: { title: 'PDF', icon: 'pdf' }
  //     }
  //   ]
  // },
  // {
  //   path: '/pdf/download',
  //   component: () => import('@/views/pdf/download'),
  //   hidden: true
  // },

  // {
  //   path: '/theme',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/theme/index'),
  //       name: 'Theme',
  //       meta: { title: 'Theme', icon: 'theme' }
  //     }
  //   ]
  // },

  // {
  //   path: '/clipboard',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/clipboard/index'),
  //       name: 'ClipboardDemo',
  //       meta: { title: 'Clipboard', icon: 'clipboard' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://github.com/PanJiaChen/vue-element-admin',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
