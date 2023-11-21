import { Avatar, AvatarImage } from "@/components/ui/avatar"

export const BotAvatar = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/12345678"
        className="p-1"
      />
    </Avatar>
  )
}
