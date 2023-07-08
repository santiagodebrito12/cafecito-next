import { User } from "@/interfaces"

interface ContentProps{
    user:User
}

export const Content = ({user}:ContentProps) => {
  return (
    <div>
        <h3>Content</h3>
    </div>
  )
}
