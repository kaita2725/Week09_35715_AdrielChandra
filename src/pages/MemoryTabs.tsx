import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import {happyOutline, sadOutline} from "ionicons/icons";
import GoodMemories from './GoodMemories';
import BadMemories from './BadMemories';
import NewMemories from './NewMemory';

const MemoryTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/GoodMemories" />
        <Route exact path="/tabs/GoodMemories" component={GoodMemories} />
        <Route exact path="/tabs/BadMemories" component={BadMemories} />
        <Route exact path="/tabs/NewMemory" component={NewMemories} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="GoodMemories" href="/tabs/GoodMemories">
          <IonIcon icon={happyOutline}/>
          <IonLabel>Good Memories</IonLabel>
        </IonTabButton>
        <IonTabButton tab="BadMemories" href="/tabs/BadMemories">
          <IonIcon icon={sadOutline}/>
          <IonLabel>Bad Memories</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default MemoryTabs;
