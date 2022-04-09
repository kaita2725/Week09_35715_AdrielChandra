import React from "react";
import { useContext } from "react";
import {IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonIcon, IonContent, IonFab, IonFabButton, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle} from "@ionic/react";
import { isPlatform} from '@ionic/react';
import {addOutline} from "ionicons/icons";
import MemoriesContext from '../data/memories-context';
import {LoadScript, GoogleMap, Marker} from '@react-google-maps/api';

const GoodMemories: React.FC = () => {
    const memoriesctx = useContext(MemoriesContext);
    const goodMemories =memoriesctx.memories.filter(memory => memory.type === 'good');

    const containerStyle = {
          width: '100%',
          height: '250px'
    };

    return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Good Memories</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            <IonHeader collapse="condense">
              <IonToolbar>
                <IonTitle size="large">Good Memories</IonTitle>
                <IonButtons slot="end" >
                  <IonButton routerLink="/tabs/NewMemory">
                    <IonIcon size="large"  md={addOutline} ios={addOutline}/>
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            {isPlatform('android') && (
              <IonFab vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton routerLink="/tabs/NewMemory">
                    <IonIcon size="large"  md={addOutline} ios={addOutline}/>
                </IonFabButton>
              </IonFab>
            )}
            <IonGrid>
              {goodMemories.length === 0 && (
                <IonRow>
                  <IonCol className="ion-text-center">
                    <h2>No good memories found.</h2>
                  </IonCol>
                </IonRow>
              )}
              {goodMemories.map(memory => (
                <IonRow key={memory.id}>
                  <IonCol>
                    <IonCard>
                      <img src={memory.base64url} alt={memory.title} />
                      <LoadScript googleMapsApiKey="AIzaSyBV-hruIhnSeWod0Z1kKJ1UP6IbPaBH3Lc">
                        <GoogleMap
                          mapContainerStyle={containerStyle}
                          center={{lat:memory.lati, lng:memory.long}}
                          zoom={18}>
                        <Marker position={{lat:memory.lati, lng:memory.long}} />
                        </GoogleMap>
                      </LoadScript>
                      <IonCardHeader>
                        <IonCardTitle>{memory.title}</IonCardTitle>
                      </IonCardHeader>
                    </IonCard>
                  </IonCol>
                </IonRow>
              ))}
            </IonGrid>
          </IonContent>
        </IonPage>
    );
};

export default GoodMemories;
