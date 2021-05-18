/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface QueryResponse {
  site_id: string;
  query: string;
  paging: {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
  };
  results: {
    id: string;
    site_id: string;
    title: string;
    seller: {
      id: number;
      permalink: string;
      registration_date: Date;
      car_dealer: boolean;
      real_estate_agency: boolean;
      tags: string[];
      seller_reputation: {
        transactions: {
          total: number;
          canceled: number;
          period: string;
          ratings: {
            negative: number;
            positive: number;
            neutral: number;
          };
          completed: number;
        };
        power_seller_status: string;
        metrics: {
          rate: number;
          value: number;
          period: string;
        };
        level_id: string;
      };
    };
    price: number;
    prices: {
      id: string;
      prices: {
        id: string;
        type: string;
        conditions: {
          context_restrictions: any[];
          start_time: string;
          end_time: string;
          eligible: boolean;
        };
        amount: number;
        regular_amount: number;
        currency_id: string;
        exchange_rate_context: string;
        metadata: {
          campaign_id: string;
          promotion_id: string;
          promotion_type: string;
        };
        last_updated: Date;
      }[];
      presentation: { display_currency: string };
      payment_method_prices: any[];
      reference_prices: any[];
      purchase_discounts: any[];
    };
    sale_price: any;
    currency_id: string;
    available_quantity: number;
    sold_quantity: number;
    buying_mode: string;
    listing_type_id: string;
    stop_time: Date;
    condition: string;
    permalink: string;
    thumbnail: string;
    thumbnail_id: string;
    accepts_mercadopago: boolean;
    installments: {
      quantity: number;
      amount: number;
      rate: number;
      currency_id: number;
    };
    address: {
      state_id: string;
      state_name: string;
      city_id: any;
      city_name: string;
    };
    shipping: {
      free_shipping: boolean;
      mode: string;
      tags: string[];
      logistic_type: string;
      store_pick_up: boolean;
    };
    seller_address: {
      id: string;
      comment: string;
      address_line: string;
      zip_code: string;
      country: {
        id: string;
        name: string;
      };
      state: {
        id: string;
        name: string;
      };
      city: {
        id: string;
        name: string;
      };
      latitude: string;
      longitude: string;
    };
    attributes: {
      value_id: any;
      values: {
        id: any;
        name: string;
        struct: { number: null; unit: string };
        source: number;
      }[];
      attribute_group_name: string;
      attribute_group_id: string;
      source: number;
      id: string;
      name: string;
      value_name: string;
      value_struct: {
        number: number;
        unit: string;
      };
    }[];
    original_price: number;
    category_id: string;
    official_store_id: any;
    domain_id: string;
    catalog_product_id: string;
    tags: string[];
    order_backend: number;
    use_thumbnail_id: boolean;
  }[];
  secondary_results: any[];
  related_results: any[];
  sort: {
    id: string;
    name: string;
  };
  available_sorts: {
    id: string;
    name: string;
  }[];
  filters: {
    id: string;
    name: string;
    type: string;
    values: {
      id: string;
      name: string;
      path_from_root: {
        id: string;
        name: string;
      }[];
    }[];
  }[];
  available_filters: {
    id: string;
    name: string;
    type: string;
    values: { id: string; name: string; results: number }[];
  }[];
}
