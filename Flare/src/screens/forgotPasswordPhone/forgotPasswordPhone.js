import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class ForgotPasswordPhone extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="44778aa0-ce45-40f3-b034-243d3a63b3c9" style={styles.forgotPasswordPhone}>
        <ReactImage data-layer="7d1d00d4-8621-418a-a7d5-631ab5379d38" source={require('./assets/background.png')} style={styles.forgotPasswordPhone_background} />
        <TouchableHighlight onPress={this.handlePress.bind(this, 'continueButton')}>
            <View data-layer="47d7d97d-b88d-4602-9365-899053475f09" style={styles.forgotPasswordPhone_continueButton}>
                <View data-layer="cf3a2c51-95bf-4234-ac42-bb606d45da56" style={styles.forgotPasswordPhone_continueButton_x4ee8c13f}>
                    <Text data-layer="65c4354f-6af0-4c62-967f-7c0cdb363a99" style={styles.forgotPasswordPhone_continueButton_x4ee8c13f_x52878da9}>􀁽</Text>
                </View>
            </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.handlePress.bind(this, 'signUpButton')}>
            <View data-layer="c6b8e0e3-c7df-421e-bc40-18993a984786" style={styles.forgotPasswordPhone_signUpButton}>
                <View data-layer="be99b4e8-5e74-4169-a986-71b5a4984e39" style={styles.forgotPasswordPhone_signUpButton_x35b63c81}>
                    <View data-layer="21dc160c-a3e0-4cb5-a445-c2bb17530704" style={styles.forgotPasswordPhone_signUpButton_x35b63c81_signUpRectangle}></View>
                    <Text data-layer="4a7a8718-635e-4183-b5f5-2a061f6645ad" style={styles.forgotPasswordPhone_signUpButton_x35b63c81_back}>BACK</Text>
                </View>
            </View>
        </TouchableHighlight>
        <View data-layer="c6e5ba9b-cba0-454a-ae40-e4fd19166f54" style={styles.forgotPasswordPhone_rectangle}></View>
        <View data-layer="23f48f42-4e6b-4b97-8ba0-86456df1df41" style={styles.forgotPasswordPhone_phoneNumber0d4280cd}>
            <Svg data-layer="2df308bb-0d23-499b-9235-7c3b025569d3" style={styles.forgotPasswordPhone_phoneNumber0d4280cd_underline} preserveAspectRatio="none" viewBox="-0.75 -0.75 278.5 1.5" fill="rgba(112, 112, 112, 1)"><SvgPath d="M 0 0 L 126.5976409912109 0 L 277 0"  /></Svg>
            <TextInput data-layer="f47576c1-a418-446f-a4a0-c8ae5d10fba1" style={styles.forgotPasswordPhone_phoneNumber0d4280cd_form} type="text" id="form-44521bcac856" name='form' placeholder='Phone Number' placeholderTextColor="rgba(112, 112, 112, 1)"  onChangeText={this.handleChangeTextinput.bind(this, 'form')} />
            <Text data-layer="656a0797-b70c-4b0d-a076-b0e23233d44d" style={styles.forgotPasswordPhone_phoneNumber0d4280cd_x3ba33bc8}>􀌿</Text>
        </View>
        <View data-layer="08e12ec2-24d1-4a93-8e1e-c1f477fce36b" style={styles.forgotPasswordPhone_lensFlare}>
            <Svg data-layer="bfc222d1-88d5-413a-9d99-8d9ee27df989" style={styles.forgotPasswordPhone_lensFlare_ellipseBigBorder} preserveAspectRatio="none" viewBox="-0.75 -0.75 151.5 151.5" fill="transparent"><SvgPath d="M 75 0 C 116.4213562011719 0 150 33.57864761352539 150 75 C 150 116.4213562011719 116.4213562011719 150 75 150 C 33.57864761352539 150 0 116.4213562011719 0 75 C 0 33.57864761352539 33.57864761352539 0 75 0 Z"  /></Svg>
            <Svg data-layer="1cc4a78a-901f-462f-b7d3-19c48b960bb7" style={styles.forgotPasswordPhone_lensFlare_ellipse1} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="a223ce4f-ad89-46e3-97a4-f30ef7e33204" style={styles.forgotPasswordPhone_lensFlare_ellipse2} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="c2a6f8df-7e05-4a66-b145-65a334b58003" style={styles.forgotPasswordPhone_lensFlare_ellipse3} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="30de264a-3188-4920-a3fc-a8d56cff688f" style={styles.forgotPasswordPhone_lensFlare_ellipse4} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="19096541-6818-44c3-8923-f4e63ceab78c" style={styles.forgotPasswordPhone_lensFlare_ellipse5} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="cdc1801c-692c-47e7-8070-4b71decf20dc" style={styles.forgotPasswordPhone_lensFlare_ellipse6} preserveAspectRatio="none" viewBox="0 0 35 35" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 17.5 0 C 27.16498184204102 0 35 7.835017204284668 35 17.5 C 35 27.16498184204102 27.16498184204102 35 17.5 35 C 7.835017204284668 35 0 27.16498184204102 0 17.5 C 0 7.835017204284668 7.835017204284668 0 17.5 0 Z"  /></Svg>
            <Svg data-layer="720c4b51-88a5-49b2-bea1-879e9337f161" style={styles.forgotPasswordPhone_lensFlare_ellipse7} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="c1a23400-8e53-4227-b8cb-1d8f17cf086e" style={styles.forgotPasswordPhone_lensFlare_ellipse8} preserveAspectRatio="none" viewBox="0 0 10 10" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 5 0 C 7.76142406463623 0 10 2.238576173782349 10 5 C 10 7.76142406463623 7.76142406463623 10 5 10 C 2.238576173782349 10 0 7.76142406463623 0 5 C 0 2.238576173782349 2.238576173782349 0 5 0 Z"  /></Svg>
        </View>
        <Text data-layer="212963f2-60c5-4fa9-908e-1bbea63b8756" style={styles.forgotPasswordPhone_youWillReceiveAnSmsWithaccountRecoveryDetails}>YOU WILL RECEIVE AN SMS WITH
ACCOUNT RECOVERY DETAILS. </Text>
        <Text data-layer="9b4562a0-f371-4182-95f4-9a91eeb95e1b" style={styles.forgotPasswordPhone_whatsyourphonenumber}>WHAT’S
YOUR
PHONE
NUMBER?</Text>
    </ScrollView>
    );
  }
}

ForgotPasswordPhone.propTypes = {

}

ForgotPasswordPhone.defaultProps = {

}


const styles = StyleSheet.create({
  "forgotPasswordPhone": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 375,
    "height": 812,
    "left": 0,
    "top": 0
  },
  "forgotPasswordPhone_background": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 1442,
    "height": 812,
    "left": -559,
    "top": 0
  },
  "forgotPasswordPhone_background_flares": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 1442,
    "height": 812,
    "left": 0,
    "top": 0
  },
  "forgotPasswordPhone_background_backgroundBlur": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 375,
    "height": 812,
    "left": 559,
    "top": 0
  },
  "forgotPasswordPhone_continueButton": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 70,
    "height": 71,
    "left": 265,
    "top": 712
  },
  "forgotPasswordPhone_continueButton_x4ee8c13f": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 70,
    "height": 71,
    "left": 0,
    "top": 0
  },
  "forgotPasswordPhone_continueButton_x4ee8c13f_x52878da9": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(239, 71, 58, 1)",
    "fontSize": 60,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "SF Pro Text",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 70,
    "height": 71,
    "left": 0,
    "top": 0
  },
  "forgotPasswordPhone_signUpButton": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 125,
    "height": 50,
    "left": 40,
    "top": 722
  },
  "forgotPasswordPhone_signUpButton_x35b63c81": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 125,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "forgotPasswordPhone_signUpButton_x35b63c81_signUpRectangle": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 4,
    "borderTopColor": "rgba(239, 71, 58, 1)",
    "borderRightWidth": 4,
    "borderRightColor": "rgba(239, 71, 58, 1)",
    "borderBottomWidth": 4,
    "borderBottomColor": "rgba(239, 71, 58, 1)",
    "borderLeftWidth": 4,
    "borderLeftColor": "rgba(239, 71, 58, 1)",
    "borderTopLeftRadius": 25,
    "borderTopRightRadius": 25,
    "borderBottomLeftRadius": 25,
    "borderBottomRightRadius": 25,
    "width": 125,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "forgotPasswordPhone_signUpButton_x35b63c81_back": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(239, 71, 58, 1)",
    "fontSize": 17,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Poppins",
    "textAlign": "left",
    "lineHeight": 100,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 52,
    "height": 107,
    "left": 37,
    "top": -25
  },
  "forgotPasswordPhone_rectangle": {
    "opacity": 0.8999999761581421,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 335,
    "height": 60,
    "left": 20,
    "top": 404
  },
  "forgotPasswordPhone_phoneNumber0d4280cd": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 300,
    "height": 30,
    "left": 37.76,
    "top": 419
  },
  "forgotPasswordPhone_phoneNumber0d4280cd_underline": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 279,
    "height": 2,
    "left": 22,
    "top": 28.5
  },
  "forgotPasswordPhone_phoneNumber0d4280cd_form": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 4,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "textAlign": "left",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 17,
    "fontFamily": "SF Pro Text",
    "width": 281,
    "height": 30,
    "left": 19,
    "top": 0
  },
  "forgotPasswordPhone_phoneNumber0d4280cd_form_textbox": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 281,
    "height": 30,
    "left": 0,
    "top": 0
  },
  "forgotPasswordPhone_phoneNumber0d4280cd_form_text": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 17,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "SF Pro Text",
    "textAlign": "left",
    "lineHeight": 83,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 277,
    "height": 86,
    "left": 4,
    "top": -26.5
  },
  "forgotPasswordPhone_phoneNumber0d4280cd_form_phoneNumber": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 17,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "SF Pro Text",
    "textAlign": "left",
    "lineHeight": 83,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 119,
    "height": 86,
    "left": 4,
    "top": -26.5
  },
  "forgotPasswordPhone_phoneNumber0d4280cd_x3ba33bc8": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 17,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "SF Pro Text",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 19,
    "height": 20,
    "left": 0,
    "top": 5
  },
  "forgotPasswordPhone_lensFlare": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 235,
    "height": 235,
    "left": 62,
    "top": 68
  },
  "forgotPasswordPhone_lensFlare_ellipseBigBorder": {
    "opacity": 0.25232601165771484,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 150,
    "height": 150,
    "left": 0,
    "top": 0
  },
  "forgotPasswordPhone_lensFlare_ellipse1": {
    "opacity": 0.25232601165771484,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20,
    "height": 20,
    "left": 140,
    "top": 140
  },
  "forgotPasswordPhone_lensFlare_ellipse2": {
    "opacity": 0.25232601165771484,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20,
    "height": 20,
    "left": 150,
    "top": 150
  },
  "forgotPasswordPhone_lensFlare_ellipse3": {
    "opacity": 0.25232601165771484,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20,
    "height": 20,
    "left": 160,
    "top": 160
  },
  "forgotPasswordPhone_lensFlare_ellipse4": {
    "opacity": 0.25232601165771484,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20,
    "height": 20,
    "left": 165,
    "top": 165
  },
  "forgotPasswordPhone_lensFlare_ellipse5": {
    "opacity": 0.25232601165771484,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20,
    "height": 20,
    "left": 180,
    "top": 180
  },
  "forgotPasswordPhone_lensFlare_ellipse6": {
    "opacity": 0.25232601165771484,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 35,
    "height": 35,
    "left": 200,
    "top": 200
  },
  "forgotPasswordPhone_lensFlare_ellipse7": {
    "opacity": 0.25232601165771484,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20,
    "height": 20,
    "left": 200,
    "top": 200
  },
  "forgotPasswordPhone_lensFlare_ellipse8": {
    "opacity": 0.25232601165771484,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 10,
    "height": 10,
    "left": 220,
    "top": 220
  },
  "forgotPasswordPhone_youWillReceiveAnSmsWithaccountRecoveryDetails": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 214, 191, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Poppins",
    "textAlign": "left",
    "lineHeight": 25,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 267,
    "height": 56,
    "left": 20,
    "top": 334
  },
  "forgotPasswordPhone_whatsyourphonenumber": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 214, 191, 1)",
    "fontSize": 55,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Poppins",
    "textAlign": "left",
    "lineHeight": 73,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 285,
    "height": 314,
    "left": 20,
    "top": 42
  }
});