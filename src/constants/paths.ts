const PATHS = {
  auth: {
    signin: '/signin',
    signup: '/signup',
    forgotPassword: '/forgot-password'
  },
  hub: {
    dashboard: '/hub/[canteenId]/dashboard',
    stock: '/hub/[canteenId]/stock',
    product: {
      new: '/hub/[canteenId]/product/new',
      id: {
        details: (canteenId: string, productId: string) =>
          `/hub/${canteenId}/product/${productId}/details`,
        edit: (canteenId: string, productId: string) =>
          `/hub/${canteenId}/product/${productId}/edit`,
        history: (canteenId: string, productId: string) =>
          `/hub/${canteenId}/product/${productId}/history`
      }
    }
  },
  sales: {
    id: {
      base: '/sales/[canteenId]',
      summary: '/sales/[canteenId]/summary',
      new: '/sales/[canteenId]/new'
    },
    cart: '/sales/cart',
    checkout: {
      base: '/sales/checkout',
      payment: '/sales/checkout/payment',
      review: '/sales/checkout/review',
      feedback: '/sales/checkout/feedback'
    }
  },
  canteens: {
    base: '/canteens',
    new: '/canteens/new',
    id: {
      dashboard: '/canteens/[canteenId]/dashboard',
      dividends: '/canteens/[canteenId]/dividends',
      history: '/canteens/[canteenId]/history',
      reports: '/canteens/[canteenId]/reports'
    }
  }
  // account: {
  //   admin: {
  //     dashboard: '/admin/dashboard',
  //     reports: {
  //       custom: '/admin/reports/custom',
  //       daily: '/admin/reports/daily'
  //     },
  //     users: '/admin/users'
  //   },
  //   member: {
  //     orders: {
  //       base: '/member/orders',
  //       details: '/member/orders/[id]'
  //     },
  //     profile: '/member/profile',
  //     settings: '/member/settings'
  //   }
  // },
  // attendees: {
  //   client: {
  //     base: '/client',
  //     new: '/client/new',
  //     details: {
  //       credits: '/client/[id]/credits',
  //       edit: '/client/[id]/edit',
  //       purchases: '/client/[id]/purchases',
  //       settings: '/client/[id]/settings',
  //       main: '/client/[id]'
  //     }
  //   },
  //   clients: '/clients'
  // },
}

export { PATHS }
