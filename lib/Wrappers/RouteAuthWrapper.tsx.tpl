import React from 'react';
import type { FC } from 'react';
import { Button, Result } from 'antd';
{{{ #useI18n }}}
import { useIntl, usePanelTab } from 'umi';
{{{ /useI18n }}}
{{{ ^useI18n }}}
import { usePanelTab } from 'umi';
{{{ /useI18n }}}
import type { IBestAFSRoute } from '@umijs/plugin-layout';

const RouteAuthWrapper: FC<{ route: IBestAFSRoute; children: React.ReactNode }> = ({
  route,
  children,
}) => {
  return <>{children}</>;
};

export default RouteAuthWrapper;
