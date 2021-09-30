/**
 * Do not edit directly
 * Generated on Thu, 30 Sep 2021 10:58:27 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "color": {
    "primary": {
      "s0": DesignToken,
      "s50": DesignToken,
      "s100": DesignToken,
      "s200": DesignToken,
      "s300": DesignToken,
      "s400": DesignToken,
      "s500": DesignToken,
      "s600": DesignToken,
      "s700": DesignToken,
      "s800": DesignToken,
      "s900": DesignToken
    },
    "neutral": {
      "s0": DesignToken,
      "s50": DesignToken,
      "s100": DesignToken,
      "s200": DesignToken,
      "s300": DesignToken,
      "s400": DesignToken,
      "s500": DesignToken,
      "s600": DesignToken,
      "s700": DesignToken,
      "s800": DesignToken,
      "s900": DesignToken
    },
    "font": {
      "base": DesignToken,
      "secondary": DesignToken,
      "tertiary": DesignToken
    }
  },
  "size": {
    "font": {
      "small": DesignToken,
      "medium": DesignToken,
      "large": DesignToken,
      "base": DesignToken
    }
  }
}