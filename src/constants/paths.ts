const PATHS = {
  account: {
    admin: {
      dashboard: '/admin/dashboard',
      reports: {
        custom: '/admin/reports/custom',
        daily: '/admin/reports/daily'
      },
      users: '/admin/users'
    },
    member: {
      orders: {
        base: '/member/orders',
        details: '/member/orders/[id]'
      },
      profile: '/member/profile',
      settings: '/member/settings'
    }
  },
  attendees: {
    client: {
      base: '/client',
      new: '/client/new',
      details: {
        credits: '/client/[id]/credits',
        edit: '/client/[id]/edit',
        purchases: '/client/[id]/purchases',
        settings: '/client/[id]/settings',
        main: '/client/[id]'
      }
    },
    clients: '/clients'
  },
  auth: {
    signin: '/signin',
    signup: '/signup'
  },
  cart: {
    checkout: '/checkout',
    history: '/cart/history',
    items: '/cart/items'
  },
  inventory: {
    hub: {
      dashboard: '/hub/dashboard',
      quickAdd: '/hub/quick-add',
      stock: '/hub/stock'
    },
    product: {
      base: '/product',
      new: '/product/new',
      details: {
        main: '/product/[id]',
        details: '/product/[id]/details',
        history: '/product/[id]/history',
        stock: '/product/[id]/stock'
      }
    },
    products: {
      base: '/products',
      categories: {
        base: '/products/categories',
        new: '/products/categories/new'
      }
    }
  }
}

export { PATHS }
