import { View, ScrollView, Image, Text } from "react-native";
import { styled } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { Icon } from "react-native-elements";
import { Button } from "@rneui/themed";
import { Entypo } from "@expo/vector-icons";

const StyledText = styled(Text);

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ position: "absolute", top: 45, left: 15, zIndex: 1 }}>
          <Icon name="chevron-left" size={32} color="black" padding={10} />
        </View>

        <View style={{ position: "absolute", top: 45, right: 15, zIndex: 1 }}>
          <Icon name="mail-outline" size={32} color="black" padding={10} />
        </View>
        <Text style={{ top: 105, fontWeight: "bold", fontSize: 18, left: 30 }}>
          Your Orders
        </Text>
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              marginLeft: 20,
              padding: 10,
              columnGap: 20,
              marginTop: 120,
              marginBottom: 10,
            }}
          >
            <View>
              <Button
                title="Pending"
                buttonStyle={{
                  backgroundColor: "rgba(39, 39, 39, 1)",
                  borderRadius: 50,
                  padding: 6,
                }}
                titleStyle={{ color: "white" }}
              />
            </View>
            <View>
              <Button
                title="Completed"
                buttonStyle={{
                  backgroundColor: "#ccc",
                  borderRadius: 50,
                  padding: 6,
                }}
                containerStyle={{}}
                titleStyle={{ color: "white" }}
              />
            </View>
            <View>
              <Button
                title="Cancelled"
                buttonStyle={{
                  backgroundColor: "#ccc",
                  borderRadius: 50,
                  padding: 6,
                }}
                containerStyle={{}}
                titleStyle={{ color: "white" }}
              />
            </View>
            <View>
              <Button
                title="Special Orders"
                buttonStyle={{
                  backgroundColor: "#ccc",
                  borderRadius: 50,
                  padding: 6,
                }}
                containerStyle={{}}
                titleStyle={{ color: "white" }}
              />
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            gap: 20,
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f9fafb",
              borderRadius: 10,
              width: 340,
              height: 120,
              marginLeft: 25,
              padding: 15,
              shadowColor: "#ccccc",
              shadowOffset: { width: -4, height: 8 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                gap: 10,
              }}
            >
              <Image
                source={require("../../assets/egg.png")}
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 10,
                  borderWidth: 5,
                  borderColor: "#ccc",
                }}
              ></Image>
              <Button
                title="View Order"
                buttonStyle={{
                  backgroundColor: "#000",
                  borderRadius: 5,
                  padding: 3,
                  width: 70,
                }}
                containerStyle={{}}
                titleStyle={{ color: "white", fontSize: 10 }}
              />
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "column",
                marginRight: 115,
                marginBottom: 15,
              }}
            >
              <StyledText className="font-extrabold text-m">
                Chicken Alfredo
              </StyledText>
              <Text className="text-slate-500">INR 4,000</Text>
              <Text className="text-[10px] font-medium">
                Delivery Time | 30 m
              </Text>
            </View>
            <Entypo
              name="mail-with-circle"
              style={{
                fontSize: 25,
              }}
            ></Entypo>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f9fafb",
              borderRadius: 10,
              width: 340,
              height: 120,
              marginLeft: 25,
              padding: 15,
              shadowColor: "#ccccc",
              shadowOffset: { width: -4, height: 8 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                gap: 10,
              }}
            >
              <Image
                source={require("../../assets/flour.png")}
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 10,
                  borderWidth: 5,
                  borderColor: "#ccc",
                }}
              ></Image>
              <Button
                title="Order Fulfilled"
                buttonStyle={{
                  backgroundColor: "#32d583",
                  borderRadius: 5,
                  padding: 4,
                  width: 85,
                }}
                containerStyle={{}}
                titleStyle={{ color: "white", fontSize: 10 }}
              />
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "column",
                marginRight: 115,
                marginBottom: 30,
              }}
            >
              <StyledText className="font-extrabold text-m">
                Efo Riro
              </StyledText>
              <Text className="text-slate-500">INR 2,500</Text>
              <Text className="text-[10px] font-medium">
                Delivery Time | 30 m
              </Text>
            </View>
            <Entypo
              name="mail-with-circle"
              style={{
                fontSize: 25,
              }}
            ></Entypo>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f9fafb",
              borderRadius: 10,
              width: 340,
              height: 120,
              marginLeft: 25,
              padding: 15,
              shadowColor: "#ccccc",
              shadowOffset: { width: -4, height: 8 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                gap: 10,
              }}
            >
              <Image
                source={require("../../assets/flour.png")}
                style={{
                  height: 70,
                  width: 70,
                  borderRadius: 10,
                  borderWidth: 5,
                  borderColor: "#ccc",
                }}
              ></Image>
              <Button
                title="Order Cancelled"
                buttonStyle={{
                  backgroundColor: "#ed474a",
                  borderRadius: 5,
                  padding: 3,
                  width: 93,
                  marginLeft: -1,
                }}
                containerStyle={{}}
                titleStyle={{ color: "white", fontSize: 10 }}
              />
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "column",
                marginRight: 110,
                marginBottom: 30,
              }}
            >
              <StyledText className="font-extrabold text-lg">
                Efo Riro
              </StyledText>
              <Text className="text-slate-500">INR 4,000</Text>
              <Text className="text-[10px] font-medium">
                Delivery Time | 30 m
              </Text>
            </View>
            <Entypo
              name="mail-with-circle"
              style={{
                fontSize: 25,
              }}
            ></Entypo>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "stretch",
          }}
        >
          <Text
            style={{
              color: "red",
              fontWeight: "bold",
              left: 40,
              fontSize: 17,
              marginBottom: 20,
            }}
          >
            Tried our African delicacies yet?
          </Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginLeft: 30,
            padding: 10,
            columnGap: 30,
          }}
        >
          <View
            style={{
              width: 100,
              borderRadius: 5,
            }}
          >
            <Image
              source={require("../../assets/flour.png")}
              style={{ height: 120, width: 100, borderRadius: 5 }}
            ></Image>
            <StyledText className="font-extrabold text-lg">Efo Riro</StyledText>
            <Text className="text-slate-500">INR 4,000</Text>
            <Text className="text-[10px] font-medium">
              Delivery Time | 30 m
            </Text>
          </View>
          <View
            style={{
              width: 100,
              borderRadius: 5,
            }}
          >
            <Image
              source={require("../../assets/egg.png")}
              style={{ height: 120, width: 100, borderRadius: 5 }}
            ></Image>
            <StyledText className="font-extrabold text-lg">
              Egg Ramen
            </StyledText>
            <Text className="text-slate-500">INR 3,500</Text>
            <Text className="text-[10px] font-medium">
              Delivery Time | 30 m
            </Text>
          </View>
          <View
            style={{
              width: 100,
              borderRadius: 5,
            }}
          >
            <Image
              source={require("../../assets/crab.png")}
              style={{ height: 120, width: 100, borderRadius: 5 }}
            ></Image>
            <StyledText className="font-extrabold text-lg">Crabfish</StyledText>
            <Text className="text-slate-500">INR 2,000</Text>
            <Text className="text-[10px] font-medium">
              Delivery Time | 30 m
            </Text>
          </View>

          <View
            style={{
              width: 100,
              borderRadius: 5,
            }}
          >
            <Image
              source={require("../../assets/chop.png")}
              style={{ height: 120, width: 100, borderRadius: 5 }}
            ></Image>
            <StyledText className="font-extrabold text-lg">Efo Riro</StyledText>
            <Text className="text-slate-500">INR 4,000</Text>
            <Text className="text-[10px] font-medium">
              Delivery Time | 30 m
            </Text>
          </View>
          <View
            style={{
              width: 100,
              borderRadius: 5,
            }}
          >
            <Image
              source={require("../../assets/pasta.png")}
              style={{ height: 120, width: 100, borderRadius: 5 }}
            ></Image>
            <StyledText className="font-extrabold text-lg">
              Egg Ramen
            </StyledText>
            <Text className="text-slate-500">INR 3,500</Text>
            <Text className="text-[10px] font-medium">
              Delivery Time | 30 m
            </Text>
          </View>
          <View
            style={{
              width: 100,
              borderRadius: 5,
            }}
          >
            <Image
              source={require("../../assets/crab.png")}
              style={{ height: 120, width: 100, borderRadius: 5 }}
            ></Image>
            <StyledText className="font-extrabold text-lg">Crabfish</StyledText>
            <Text>INR 2,000</Text>
            <Text className="text-[10px] font-medium">
              Delivery Time | 30 m
            </Text>
          </View>
        </ScrollView>
      </ScrollView>
    </>
  );
}
