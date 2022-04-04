import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React from 'react';
import user from './UserList.json';
import icons from '../../constants/icons';
import BottomSheet from '../../Components/BottomSheet';

const ModelPoup = ({visible, children}) => {
  const [showModel, setShowModel] = React.useState(visible);
  React.useEffect(() => {
    toggleModel();
  }, [visible]);
  const toggleModel = () => {
    if (visible) {
      setShowModel(true);
    } else {
      setShowModel(false);
    }
  };
  return (
    <Modal transparent visible={showModel}>
      <View style={styles.modalBackGround}>
        <View>{children}</View>
      </View>
    </Modal>
  );
};
const PostScreen = () => {
  const [visible, setVisible] = React.useState(false);
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
            </View>
            <View style={styles.imgcontainer}>
              <Image
                source={{uri: item.postpic}}
                resizeMode="cover"
                style={styles.img}
              />
            </View>
            <View style={styles.Othercontainer}>
              <TouchableOpacity>
                <Image source={icons.Like} style={styles.like} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={icons.Comment} style={styles.comment} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setVisible(true)}>
                <Image source={icons.Share} style={styles.share} />
              </TouchableOpacity>
            </View>
            <View style={styles.Othercontainer}>
              <Text style={styles.like}>1.5k</Text>
              <Text style={styles.comment}>1.5k</Text>
              <Text style={styles.share}>1.5k</Text>
            </View>
          </View>
        ))}
      </View>
      {/* <View>
        <ModelPoup visible={visible}>
          <BottomSheet />
        </ModelPoup>
      </View> */}
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  postcontainer: {
    marginBottom: 80,
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
    marginLeft: 25,
  },
  username: {
    fontSize: 16,
    position: 'absolute',
    marginLeft: 70,
  },
  menu: {
    height: 8,
    width: 20,
    marginRight: 15,
  },
  imgcontainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  img: {
    width: '100%',
    borderRadius: 15,
    height: 200,
  },
  Othercontainer: {
    flexDirection: 'row',
    marginLeft: 13,
    marginBottom: 10,
  },
  like: {
    width: 31,
    height: 28,
    marginLeft: 10,
  },
  comment: {
    width: 31,
    height: 28,
    marginLeft: 10,
  },
  share: {
    width: 28,
    marginLeft: 10,
    height: 28,
  },
  modalBackGround: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
});
