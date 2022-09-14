import React, { useContext, useRef } from 'react';
import type { FC } from 'react';
// @ts-ignore
import { useAliveController } from 'react-activation';
import PanelTab from './PanelTab';
import { Tabs } from 'antd';
import { RouteContext } from '@ant-design/pro-layout';

const PanelTabs: FC = () => {
  const { getCachingNodes } = useAliveController();
  const cachingNodes = getCachingNodes();
  const routeContext = useContext(RouteContext);
  const scrollContainer = useRef<HTMLDivElement>();

  return (
    <div className={'panel-tabs-bar-parent'}>
      <style>{`
      .panel-tabs-bar {
        width: calc(100% - ${routeContext.siderWidth}px);
        position: fixed;
        height: 38px;
        display: flex;
        overflow-x: scroll;
        padding: 0 50px 5px 5px;
      }
      .panel-tabs-bar::-webkit-scrollbar {
        display: none;
      }
  `}</style>
      <div className="panel-tabs-bar" ref={scrollContainer}>

        <Tabs>
          {cachingNodes.map((node, idx) => (
            <PanelTab key={idx} node={node} />
          ))}
        </Tabs>

      </div>
    </div>
  );
};

export default PanelTabs;
