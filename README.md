## Swapishop is a react-native app by Juan Ignacio Echaide with features:
      * ReactQuery state-management (useInfiniteQuery)
      * Infinite scrolling
      * React-router navigation

## DISCLAIMER
This project is not ment to be a good example of UX/UI but only an exmaple of state managemente in some case scenario

### clone rep
      git clone https://github.com/juanIgnacioEchaide/swapishop
### install dependencies
      yarn
### run metro terminal
      yarn start 
### run android
      yarn android

### How does it work

![Uploading Screenshot from 2023-12-16 00-24-39.png…]()

This representation showcases the hierarchy where AppNavigator contains the navigation setup, including the CharactersCatalogueScreen. 
Inside the CharactersCatalogueScreen, the Characters component utilizes the useInfiniteQuery hook for data management, and it interacts with the DetailsModal component for displaying detailed information about a character.
   
## Captures

Fading Splash
![Screenshot from 2023-12-07 17-08-23](https://github.com/juanIgnacioEchaide/swapishop/assets/43832189/2c41d5d2-9b02-47a3-b418-cbde2b7ceea8)


Infinite scrolling
![Screenshot from 2023-12-07 17-07-42](https://github.com/juanIgnacioEchaide/swapishop/assets/43832189/72b14d7a-1001-49f7-9abd-6c5b049b0eab)


Single item view (Modal)
![Screenshot from 2023-12-07 17-09-04](https://github.com/juanIgnacioEchaide/swapishop/assets/43832189/7041a391-004a-41b9-870b-b988f72d3113)



### dependencies 
          "dependencies": {
            "@react-native-community/masked-view": "^0.1.11",
            "@react-navigation/native": "^6.1.9",
            "@react-navigation/native-stack": "^6.9.17",
            "@react-navigation/stack": "^6.3.20",
            "@tanstack/react-query": "^5.10.0",
            "@types/jest": "^29.5.10",
            "axios": "^1.6.2",
            "react": "18.2.0",
            "react-native": "0.72.7",
            "react-native-gesture-handler": "^2.14.0",
            "react-native-loader": "^1.3.1",
            "react-native-reanimated": "^3.6.0",
            "react-native-safe-area-context": "^4.7.4",
            "react-native-screens": "^3.27.0",
            "react-native-svg": "^14.0.0",
            "react-native-svg-transformer": "^1.1.0"
          },
          "devDependencies": {
            "@babel/core": "^7.20.0",
            "@babel/preset-env": "^7.20.0",
            "@babel/runtime": "^7.20.0",
            "@react-native/eslint-config": "^0.72.2",
            "@react-native/metro-config": "^0.72.11",
            "@testing-library/react-hooks": "^8.0.1",
            "@tsconfig/react-native": "^3.0.0",
            "@types/react": "^18.0.24",
            "@types/react-test-renderer": "^18.0.0",
            "babel-jest": "^29.2.1",
            "eslint": "^8.19.0",
            "jest": "^29.7.0",
            "metro-react-native-babel-preset": "0.76.8",
            "prettier": "^2.4.1",
            "react-test-renderer": "18.2.0",
            "typescript": "4.8.4"
          },
