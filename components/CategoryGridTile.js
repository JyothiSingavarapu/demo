import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.item}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View >
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 1,
    height: 20,
    borderRadius: 1,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  item: {
    flex:1,
    height: 30,
    margin: 1,
    elevation: 4,
    backgroundColor: 'blue',
    padding: 1,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 12,
    width: 100,
  },
});