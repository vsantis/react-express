/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface ItemIdResponse {
  id: string;
  site_id: string;
  title: string;
  subtitle: string;
  seller_id: number;
  category_id: string;
  official_store_id: any;
  price: number;
  base_price: number;
  original_price: number;
  currency_id: string;
  initial_quantity: number;
  available_quantity: number;
  sold_quantity: number;
  sale_terms: {
    id: string;
    name: string;
    value_id: any;
    value_name: string;
    value_struct: {
      number: number;
      unit: string;
    };
    values: {
      id: any;
      name: string;
      struct: {
        number: number;
        unit: string;
      };
    }[];
  }[];
  buying_mode: string;
  listing_type_id: string;
  start_time: Date;
  stop_time: Date;
  condition: string;
  permalink: string;
  thumbnail_id: string;
  thumbnail: string;
  secure_thumbnail: string;
  pictures: {
    id: string;
    url: string;
    secure_url: string;
    size: string;
    max_size: string;
    quality: any;
  }[];
  video_id: any;
  descriptions: [
    {
      id: string;
    }
  ];
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods: any[];
  shipping: {
    mode: string;
    methods: any[];
    tags: any[];
    dimensions: any;
    local_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    store_pick_up: boolean;
  };
  international_delivery_mode: string;
  seller_address: {
    city: {
      name: string;
    };
    state: {
      id: string;
      name: string;
    };
    country: {
      id: string;
      name: string;
    };
    search_location: {
      neighborhood: {
        id: string;
        name: string;
      };
      city: {
        id: string;
        name: string;
      };
      state: {
        id: string;
        name: string;
      };
    };
    id: number;
  };
  seller_contact: any;
  location: any;
  coverage_areas: any[];
  attributes: {
    id: string;
    name: string;
    value_id: any;
    value_name: string;
    value_struct: {
      number: number;
      unit: string;
    };
    values: {
      id: any;
      name: string;
      struct: {
        number: number;
        unit: string;
      };
    }[];
    attribute_group_id: any;
    attribute_group_name: any;
  }[];
  warnings: any[];
  listing_source: string;
  variations: [
    {
      id: number;
      price: number;
      attribute_combinations: {
        id: string;
        name: string;
        value_id: any;
        value_name: string;
        value_struct: any;
        values: {
          id: any;
          name: string;
          struct: any;
        }[];
      }[];
      available_quantity: number;
      sold_quantity: number;
      sale_terms: any[];
      picture_ids: string[];
      catalog_product_id: any;
    }
  ];
  status: string;
  sub_status: any[];
  tags: string[];
  warranty: string;
  catalog_product_id: string;
  domain_id: string;
  parent_item_id: any;
  differential_pricing: any;
  deal_ids: string[];
  automatic_relist: boolean;
  date_created: Date;
  last_updated: Date;
  health: number;
  catalog_listing: boolean;
  channels: string[];
}
