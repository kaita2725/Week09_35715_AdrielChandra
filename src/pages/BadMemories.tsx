import React from "react";
import { useContext } from "react";
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle} from "@ionic/react";
import MemoriesContext from '../data/memories-context';
import {LoadScript, GoogleMap, Marker} from '@react-google-maps/api';

const BadMemories: React.FC = () => {
    const memoriesctx = useContext(MemoriesContext);
    const badMemories =memoriesctx.memories.filter(memory => memory.type === 'bad');

    const containerStyle = {
          width: '100%',
          height: '250px'
    };

    return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Bad Memories</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Bad Memories</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonGrid>
            {badMemories.length === 0 && (
              <IonRow>
                <IonCol className="ion-text-center">
                  <h2>No good memories found.</h2>
                </IonCol>
              </IonRow>
            )}
            {badMemories.map(memory => (
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

export default BadMemories;
