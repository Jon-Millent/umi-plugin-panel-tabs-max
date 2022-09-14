import React from 'react';
import type { FC } from 'react';
import type { IBestAFSRoute } from '@umijs/plugin-layout';
import { PanelTabsWrapper } from '@@/plugin-panel-tabs';
import { Button, Result } from 'antd';
{{{ #useI18n }}}
import { useIntl, usePanelTab } from 'umi';
{{{ /useI18n }}}
{{{ ^useI18n }}}
import { usePanelTab } from 'umi';
{{{ /useI18n }}}

const PanelTabsAndRouteAuthWrapper: FC<{ route: IBestAFSRoute; children: React.ReactNode }> = ({
  route,
  children,
}) => {
  let renderContent = children;

  return <PanelTabsWrapper route={route} children={renderContent} />;
};

export default PanelTabsAndRouteAuthWrapper;
