/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import {
  FeatureCatalogueCategory,
  FeatureCatalogueRegistryProvider,
} from 'ui/registry/feature_catalogue';

const APP_ID = 'ingest';

FeatureCatalogueRegistryProvider.register(() => ({
  id: 'infraops',
  title: 'InfraOps',
  description:
    'Explore infrastructure metrics and logs for common servers, containers, and services.',
  icon: 'infraApp',
  path: `/app/${APP_ID}#/infraops`,
  showOnHomePage: true,
  category: FeatureCatalogueCategory.DATA,
}));

FeatureCatalogueRegistryProvider.register(() => ({
  id: 'infralogging',
  title: 'Logs',
  description:
    'Stream logs in real time or scroll through historical views in a console-like experience.',
  icon: 'loggingApp',
  path: `/app/${APP_ID}#/logs`,
  showOnHomePage: true,
  category: FeatureCatalogueCategory.DATA,
}));

FeatureCatalogueRegistryProvider.register(() => ({
  id: 'secops',
  title: 'SecOps',
  description: 'Explore security metrics and logs for events and alerts',
  icon: 'securityApp',
  path: `/app/${APP_ID}#/secops`,
  showOnHomePage: true,
  category: FeatureCatalogueCategory.DATA,
}));
