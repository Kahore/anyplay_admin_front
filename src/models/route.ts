import React from "react";

export interface IRoute {
  path: string,
  title: string,
  mode: 'exact' | 'sensitive' | 'strict',
  props?: any
  isUsedInMenu: boolean,
  component: React.FC
}
