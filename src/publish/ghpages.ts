/*
* ghpages.ts
*
* Copyright (C) 2020 by RStudio, PBC
*
*/

export interface GhpagesOptions {
  site: string;
}

export function ghpagesPublish(_options: GhpagesOptions): Promise<void> {
  return Promise.resolve();
}
