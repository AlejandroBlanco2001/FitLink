import { IconSymbol } from '@/components/ui/IconSymbol';
import { View, Avatar, XGroup, Button, H3, Text } from 'tamagui';

export default function ProfilePage() {
    return (
        <View
            style={{
                alignItems: "center"
            }}
        >
            <Avatar circular size="$11" marginBottom={"$2"}>
                <Avatar.Image
                    accessibilityLabel="Your profile picture"
                    src="https://avatar.iran.liara.run/public"
                />
                <Avatar.Fallback backgroundColor="$blue10" />
            </Avatar>
            <View
                style={{
                    alignItems: "center"
                }}
            >
                <H3>Isaac Blanco</H3>
            </View>
            <XGroup size="$3" $gtSm={{ size: '$5' }}>
                <XGroup.Item>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <IconSymbol color="black" name="scalemass.fill"/>
                        <Text>
                            Peso
                        </Text>
                        <Text>
                            70 Kg
                        </Text>
                    </View>
                </XGroup.Item>
                <XGroup.Item>
                <View
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <IconSymbol color="black" name="percent"/>
                        <Text>
                            Grasa corporal
                        </Text>
                        <Text>
                            15.00
                        </Text>
                    </View>
                </XGroup.Item>
                <XGroup.Item>
                <View
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <IconSymbol color="black" name="ruler.fill"/>
                        <Text>
                            Altura
                        </Text>
                        <Text>  
                            171 cm
                        </Text>
                    </View>
                </XGroup.Item>
            </XGroup>

        </View>
    )
}