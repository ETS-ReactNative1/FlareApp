import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class SignUpUsernameAndPassword extends Component {

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
    <ScrollView data-layer="ffa0df1a-0381-4a87-8fda-c6b467e04ae7" style={styles.signUpUsernameAndPassword}>
        <ReactImage data-layer="c2753b56-42e1-4e93-af52-d416c7d9390e" source={require('./assets/background.png')} style={styles.signUpUsernameAndPassword_background} />
        <TouchableHighlight onPress={this.handlePress.bind(this, 'signUpButton')}>
            <View data-layer="a7e554ac-61e5-4e8f-b771-83ed21e2f63d" style={styles.signUpUsernameAndPassword_signUpButton}>
                <View data-layer="6df7cb6f-c9ad-4f7e-88b6-025a79d6568e" style={styles.signUpUsernameAndPassword_signUpButton_x54398c44}>
                    <View data-layer="0ccb655b-00b1-4f98-b898-c08984d8fa70" style={styles.signUpUsernameAndPassword_signUpButton_x54398c44_rectangle1525}></View>
                    <ReactImage data-layer="43e02801-e7f8-450d-a971-4d223976d765" source={require('./assets/text4124222d.png')} style={styles.signUpUsernameAndPassword_signUpButton_x54398c44_text4124222d} />
                    <Svg data-layer="96787e82-4b66-414e-98ea-92bf0ab5cac9" style={styles.signUpUsernameAndPassword_signUpButton_x54398c44_check} preserveAspectRatio="none" viewBox="1704.7811279296875 2516.70556640625 0.75 0.75" fill="transparent"><SvgPath d="M 1705.156127929688 2517.08056640625 L 1705.156127929688 2517.08056640625 L 1705.156127929688 2517.08056640625"  /></Svg>
                </View>
            </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.handlePress.bind(this, 'loginButton')}>
            <View data-layer="2152bd71-0b31-402e-bc7b-8c8c9e1d8501" style={styles.signUpUsernameAndPassword_loginButton}>
                <View data-layer="5b7f4c23-f331-4a24-883c-f6c3608bb26d" style={styles.signUpUsernameAndPassword_loginButton_xf2dab072}>
                    <View data-layer="4884a87d-4d0a-44bb-bb97-9d569adede54" style={styles.signUpUsernameAndPassword_loginButton_xf2dab072_loginRectangle}></View>
                    <Text data-layer="efe74ef0-5e08-49ec-95db-308682c9b300" style={styles.signUpUsernameAndPassword_loginButton_xf2dab072_cancel}>CANCEL</Text>
                </View>
            </View>
        </TouchableHighlight>
        <View data-layer="8554e827-1f10-4308-972c-329ef32338aa" style={styles.signUpUsernameAndPassword_rectangle}></View>
        <View data-layer="319d06cf-9a91-4393-87dd-ca2b153f5a53" style={styles.signUpUsernameAndPassword_retypePassword}>
            <Svg data-layer="78dff2b6-429e-464c-b390-a9948a898813" style={styles.signUpUsernameAndPassword_retypePassword_underline4c455e75} preserveAspectRatio="none" viewBox="-0.75 -0.75 277.741943359375 1.5" fill="rgba(112, 112, 112, 1)"><SvgPath d="M 0 0 L 126.2512130737305 0 L 276.2420043945312 0"  /></Svg>
            <TextInput data-layer="8ef03146-58ee-4ce7-9f7f-344b2d751793" style={styles.signUpUsernameAndPassword_retypePassword_formb0736b3f} type="password" id="form-87881262405d" name='form' placeholder='Confirm Password' placeholderTextColor="rgba(112, 112, 112, 1)"  onChangeText={this.handleChangeTextinput.bind(this, 'form')} />
            <Text data-layer="ce2f94a8-86a4-44f6-acad-47bee87c6002" style={styles.signUpUsernameAndPassword_retypePassword_xa0f23915}>􀎡</Text>
        </View>
        <View data-layer="3365a983-065d-48c1-9fd8-36f67078a24e" style={styles.signUpUsernameAndPassword_passwordbfc5a762}>
            <Svg data-layer="946cabc6-311d-4be4-a6fb-c62cb1235cda" style={styles.signUpUsernameAndPassword_passwordbfc5a762_underline5dc6f069} preserveAspectRatio="none" viewBox="-0.75 -0.75 277.741943359375 1.5" fill="rgba(112, 112, 112, 1)"><SvgPath d="M 0 0 L 126.2512130737305 0 L 276.2420043945312 0"  /></Svg>
            <TextInput data-layer="1e0d941a-483e-493e-9660-b484f6f020ef" style={styles.signUpUsernameAndPassword_passwordbfc5a762_form08eebf94} type="password" id="form-77fc5268aa54" name='form' placeholder='Password' placeholderTextColor="rgba(112, 112, 112, 1)"  onChangeText={this.handleChangeTextinput.bind(this, 'form')} />
            <Text data-layer="a85e99c7-c7e3-43bf-8e95-72511626cebb" style={styles.signUpUsernameAndPassword_passwordbfc5a762_x1c8323a8}>􀎡</Text>
        </View>
        <View data-layer="8e690084-b0d7-46b5-9193-1b671c5fac01" style={styles.signUpUsernameAndPassword_username8b220dbd}>
            <Svg data-layer="d378ba3b-8749-4b6b-8b05-c866c7eaf510" style={styles.signUpUsernameAndPassword_username8b220dbd_underline} preserveAspectRatio="none" viewBox="-0.75 -0.75 277.741943359375 1.5" fill="rgba(112, 112, 112, 1)"><SvgPath d="M 0 0 L 126.2512130737305 0 L 276.2420043945312 0"  /></Svg>
            <TextInput data-layer="d62eacd6-1648-4a65-94bd-0b0259853cb0" style={styles.signUpUsernameAndPassword_username8b220dbd_form} type="text" id="form-a75cb3cb2b48" name='form' placeholder='Username' placeholderTextColor="rgba(112, 112, 112, 1)"  onChangeText={this.handleChangeTextinput.bind(this, 'form')} />
            <Text data-layer="3555e8bd-44c0-4e94-90da-78568e0e7c0f" style={styles.signUpUsernameAndPassword_username8b220dbd_xb9e9fd14}>􀉪</Text>
        </View>
        <View data-layer="666c1654-1ebf-4602-9b3a-14bc10c3648d" style={styles.signUpUsernameAndPassword_lensFlare}>
            <Svg data-layer="bc738c57-ebd0-429d-b740-14f451ceb163" style={styles.signUpUsernameAndPassword_lensFlare_ellipseBigBorder} preserveAspectRatio="none" viewBox="-0.75 -0.75 151.5 151.5" fill="transparent"><SvgPath d="M 75 0 C 116.4213562011719 0 150 33.57864761352539 150 75 C 150 116.4213562011719 116.4213562011719 150 75 150 C 33.57864761352539 150 0 116.4213562011719 0 75 C 0 33.57864761352539 33.57864761352539 0 75 0 Z"  /></Svg>
            <Svg data-layer="714a00aa-a2e1-4598-bf06-6ca8e32f2581" style={styles.signUpUsernameAndPassword_lensFlare_ellipse1} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="f0a16490-0101-49c9-af97-c460c2d5c9c5" style={styles.signUpUsernameAndPassword_lensFlare_ellipse2} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="dcc5002f-55ac-49d7-8781-12023aa56242" style={styles.signUpUsernameAndPassword_lensFlare_ellipse3} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="fd3cc79a-65be-483d-8be7-02a9ba6f3d05" style={styles.signUpUsernameAndPassword_lensFlare_ellipse4} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="9abbe869-054d-4461-92b1-0f8c0f5960b6" style={styles.signUpUsernameAndPassword_lensFlare_ellipse5} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="7f4c9174-32b1-469f-82d8-9510a9dbb41e" style={styles.signUpUsernameAndPassword_lensFlare_ellipse6} preserveAspectRatio="none" viewBox="0 0 35 35" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 17.5 0 C 27.16498184204102 0 35 7.835017204284668 35 17.5 C 35 27.16498184204102 27.16498184204102 35 17.5 35 C 7.835017204284668 35 0 27.16498184204102 0 17.5 C 0 7.835017204284668 7.835017204284668 0 17.5 0 Z"  /></Svg>
            <Svg data-layer="e61176fb-bb51-4910-bda2-4e4fec4833e3" style={styles.signUpUsernameAndPassword_lensFlare_ellipse7} preserveAspectRatio="none" viewBox="0 0 20 20" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 10 0 C 15.52284812927246 0 20 4.477152347564697 20 10 C 20 15.52284812927246 15.52284812927246 20 10 20 C 4.477152347564697 20 0 15.52284812927246 0 10 C 0 4.477152347564697 4.477152347564697 0 10 0 Z"  /></Svg>
            <Svg data-layer="47141026-0922-498b-aacc-d6ed830b72cf" style={styles.signUpUsernameAndPassword_lensFlare_ellipse8} preserveAspectRatio="none" viewBox="0 0 10 10" fill="rgba(239, 71, 58, 1)"><SvgPath d="M 5 0 C 7.76142406463623 0 10 2.238576173782349 10 5 C 10 7.76142406463623 7.76142406463623 10 5 10 C 2.238576173782349 10 0 7.76142406463623 0 5 C 0 2.238576173782349 2.238576173782349 0 5 0 Z"  /></Svg>
        </View>
        <Text data-layer="0267751e-c2cc-44c6-8fd1-045d43a8dbc2" style={styles.signUpUsernameAndPassword_createYourPersonalUsernameAndsetYourPassword}>CREATE YOUR PERSONAL USERNAME AND
SET YOUR PASSWORD. </Text>
        <Text data-layer="ba59a3d5-3a1b-4e7d-b106-5c256c6954e5" style={styles.signUpUsernameAndPassword_oneLastthing}>ONE LAST
THING.</Text>
        <Text data-layer="99e5a70e-ed74-484e-9aa7-2ad331c13490" style={styles.signUpUsernameAndPassword_bySigningUpYouConfirmThatYouagreeToOurTermsOfServiceAndhaveReadAndUnderstoodOurprivacyPolicy}>BY SIGNING UP, YOU CONFIRM THAT YOU
AGREE TO OUR TERMS OF SERVICE AND
HAVE READ AND UNDERSTOOD OUR
PRIVACY POLICY.</Text>
    </ScrollView>
    );
  }
}

SignUpUsernameAndPassword.propTypes = {

}

SignUpUsernameAndPassword.defaultProps = {

}


const styles = StyleSheet.create({
  "signUpUsernameAndPassword": {
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
  "signUpUsernameAndPassword_background": {
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
  "signUpUsernameAndPassword_background_flares": {
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
  "signUpUsernameAndPassword_background_backgroundBlur": {
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
  "signUpUsernameAndPassword_signUpButton": {
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
    "width": 200,
    "height": 50,
    "left": 155,
    "top": 722
  },
  "signUpUsernameAndPassword_signUpButton_x54398c44": {
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
    "width": 200,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "signUpUsernameAndPassword_signUpButton_x54398c44_rectangle1525": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(239, 71, 58, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 51,
    "borderTopRightRadius": 51,
    "borderBottomLeftRadius": 51,
    "borderBottomRightRadius": 51,
    "width": 200,
    "height": 50,
    "left": 0,
    "top": 0
  },
  "signUpUsernameAndPassword_signUpButton_x54398c44_text4124222d": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 75,
    "height": 14,
    "left": 63,
    "top": 18
  },
  "signUpUsernameAndPassword_signUpButton_x54398c44_text4124222d_signUp": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 17,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Poppins",
    "textAlign": "left",
    "lineHeight": 28,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 75,
    "height": 35,
    "left": 0,
    "top": -7
  },
  "signUpUsernameAndPassword_signUpButton_x54398c44_text4124222d_textMask": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(239, 71, 58, 1)",
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
    "width": 75,
    "height": 14,
    "left": 0,
    "top": 0
  },
  "signUpUsernameAndPassword_signUpButton_x54398c44_check": {
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 1,
    "height": 1,
    "left": 100.48,
    "top": 24.17
  },
  "signUpUsernameAndPassword_loginButton": {
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
    "left": 20,
    "top": 722
  },
  "signUpUsernameAndPassword_loginButton_xf2dab072": {
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
  "signUpUsernameAndPassword_loginButton_xf2dab072_loginRectangle": {
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
  "signUpUsernameAndPassword_loginButton_xf2dab072_cancel": {
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
    "width": 74,
    "height": 107,
    "left": 26,
    "top": -25
  },
  "signUpUsernameAndPassword_rectangle": {
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
    "height": 180,
    "left": 20,
    "top": 344
  },
  "signUpUsernameAndPassword_retypePassword": {
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
    "width": 299.24,
    "height": 30,
    "left": 37.76,
    "top": 479
  },
  "signUpUsernameAndPassword_retypePassword_underline4c455e75": {
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
    "width": 278.24,
    "height": 2,
    "left": 22,
    "top": 28.5
  },
  "signUpUsernameAndPassword_retypePassword_formb0736b3f": {
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
    "paddingLeft": 5,
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
    "left": 18,
    "top": 0
  },
  "signUpUsernameAndPassword_retypePassword_formb0736b3f_textboxd2e04dc6": {
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
  "signUpUsernameAndPassword_retypePassword_formb0736b3f_textf3fe60f7": {
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
    "width": 276,
    "height": 86,
    "left": 5,
    "top": -26.5
  },
  "signUpUsernameAndPassword_retypePassword_formb0736b3f_confirmPassword": {
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
    "width": 145,
    "height": 86,
    "left": 5,
    "top": -26.5
  },
  "signUpUsernameAndPassword_retypePassword_xa0f23915": {
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
    "width": 18,
    "height": 20,
    "left": 0,
    "top": 5
  },
  "signUpUsernameAndPassword_passwordbfc5a762": {
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
    "width": 299.24,
    "height": 30,
    "left": 37.76,
    "top": 419
  },
  "signUpUsernameAndPassword_passwordbfc5a762_underline5dc6f069": {
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
    "width": 278.24,
    "height": 2,
    "left": 22,
    "top": 28.5
  },
  "signUpUsernameAndPassword_passwordbfc5a762_form08eebf94": {
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
    "paddingLeft": 5,
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
    "left": 18,
    "top": 0
  },
  "signUpUsernameAndPassword_passwordbfc5a762_form08eebf94_textbox90ff52ca": {
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
    "width": 281,
    "height": 30,
    "left": 0,
    "top": 0
  },
  "signUpUsernameAndPassword_passwordbfc5a762_form08eebf94_texte058a420": {
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
    "width": 276,
    "height": 86,
    "left": 5,
    "top": -26.5
  },
  "signUpUsernameAndPassword_passwordbfc5a762_form08eebf94_password": {
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
    "width": 77,
    "height": 86,
    "left": 5,
    "top": -26.5
  },
  "signUpUsernameAndPassword_passwordbfc5a762_x1c8323a8": {
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
    "width": 18,
    "height": 20,
    "left": 0,
    "top": 5
  },
  "signUpUsernameAndPassword_username8b220dbd": {
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
    "width": 299.24,
    "height": 30,
    "left": 38.76,
    "top": 359
  },
  "signUpUsernameAndPassword_username8b220dbd_underline": {
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
    "width": 278.24,
    "height": 2,
    "left": 22,
    "top": 28.5
  },
  "signUpUsernameAndPassword_username8b220dbd_form": {
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
    "paddingLeft": 5,
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
    "left": 18,
    "top": 0
  },
  "signUpUsernameAndPassword_username8b220dbd_form_textbox": {
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
  "signUpUsernameAndPassword_username8b220dbd_form_text": {
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
    "width": 276,
    "height": 86,
    "left": 5,
    "top": -26.5
  },
  "signUpUsernameAndPassword_username8b220dbd_form_username": {
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
    "width": 82,
    "height": 86,
    "left": 5,
    "top": -26.5
  },
  "signUpUsernameAndPassword_username8b220dbd_xb9e9fd14": {
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
    "width": 18,
    "height": 20,
    "left": 0,
    "top": 5
  },
  "signUpUsernameAndPassword_lensFlare": {
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
  "signUpUsernameAndPassword_lensFlare_ellipseBigBorder": {
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
  "signUpUsernameAndPassword_lensFlare_ellipse1": {
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
  "signUpUsernameAndPassword_lensFlare_ellipse2": {
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
  "signUpUsernameAndPassword_lensFlare_ellipse3": {
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
  "signUpUsernameAndPassword_lensFlare_ellipse4": {
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
  "signUpUsernameAndPassword_lensFlare_ellipse5": {
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
  "signUpUsernameAndPassword_lensFlare_ellipse6": {
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
  "signUpUsernameAndPassword_lensFlare_ellipse7": {
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
  "signUpUsernameAndPassword_lensFlare_ellipse8": {
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
  "signUpUsernameAndPassword_createYourPersonalUsernameAndsetYourPassword": {
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
    "width": 339,
    "height": 56,
    "left": 20,
    "top": 208
  },
  "signUpUsernameAndPassword_oneLastthing": {
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
    "width": 286,
    "height": 168,
    "left": 20,
    "top": 42
  },
  "signUpUsernameAndPassword_bySigningUpYouConfirmThatYouagreeToOurTermsOfServiceAndhaveReadAndUnderstoodOurprivacyPolicy": {
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
    "width": 338,
    "height": 106,
    "left": 20,
    "top": 604
  }
});