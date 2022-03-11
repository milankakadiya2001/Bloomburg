import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import user from './UserList.json';
import icons from '../../constants/icons';

const PostScreen = () => {
  
  return (
    <View>
      <View style={styles.postcontainer}>
        {user.map((item, index) => (
          <View>
            <View style={styles.story}>
              <View style={styles.storyborder}>
                <Image source={{uri: item.photo}} style={styles.storyimg} />
              </View>
              <Text style={styles.username}>{item.name}</Text>

              <View style={{}}>
                <TouchableOpacity>
                  <Image source={icons.menu} style={styles.menu} />
                </TouchableOpacity>
              </View>

              
            </View>
            <View style={styles.imgcontainer}>
                <Image source={icons.Post} style={styles.img} />
              </View>
              <View style={styles.Othercontainer} >
                <TouchableOpacity>
                <Image source= {icons.Like} style= {styles.like} />
                </TouchableOpacity>
                <TouchableOpacity>
                <Image source= {icons.Comment} style= {styles.comment}/>
                </TouchableOpacity>
                <TouchableOpacity  >
                <Image source= {icons.Share} style= {styles.share}/>
                </TouchableOpacity>
              </View>
              <View style={styles.Othercontainer} >
                <Text style= {styles.like}>1.5k</Text>
                <Text style= {styles.comment}>1.5k</Text>
                <Text style= {styles.share}>1.5k</Text>
              </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  postcontainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  story: {
    // width: '65%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  storyimg: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginLeft: 15
  },
  username: {
    fontSize: 16,
    position: 'absolute',
    marginLeft: 60,
  },
  menu: {
    height: 8,
    width: 20,
    marginRight: 15
  },
  imgcontainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginVertical: 10,
    paddingHorizontal: 20, 
    
  },
  img: {
    width: "100%",
    borderRadius: 15
    
  },
  Othercontainer: {
    flexDirection: 'row',
    marginLeft: 13,
    marginBottom: 10
  },
  like: {
    width: 25,
    height: 25, 
    marginLeft: 10
  },
comment: {
  width: 25,
  height: 25,
  marginLeft: 10

},
share: {
  width: 25,
  marginLeft: 10,
  height: 25
},
});
