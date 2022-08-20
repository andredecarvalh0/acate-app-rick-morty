import {
    View,
    Text,
    Image,
    Pressable,
    Dimensions,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';

import { 
    useEffect, 
    useState 
} from 'react';

import Api from '../services/Api';

import { ICharacter} from '../types';

function RMCharacter() {

    const [character, setCharacter] = useState<ICharacter[]>();

    useEffect(() =>{
        Api.get('character').then(
            res => {
                setCharacter(res.data.results)
            }
        )
    }, [])

    return(
        <SafeAreaView>
            <ScrollView>
                <View
                    style={styles.container}
                    >        
                            { character?.map(
                                (item, index) => (
                                    <View 
                                        style={styles.card}
                                        key={index}
                                    >
                                        <Image
                                            style={{ width: 100, height: 100 }}
                                            source={{ uri: item.image }}
                                        />
                                        <Text
                                            style={styles.textName}
                                        >{item.name}</Text>

                                        <Text
                                            style={styles.textName}
                                        >{item.species}</Text>

                                        <Text
                                        style={styles.textName}
                                        >{item.gender}</Text>

                                    </View>
                                )
                            )   }
                </View>
            </ScrollView>  
        </ SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    card: {},
    textName: {},
    tect: {},
})

export default RMCharacter