import { getTopic } from '@/actions/topicAction'
import EditTopicForm from '@/components/EditTopicForm'

export default async function EditTopic({
  params,
}: {
  params: { id: string }
}) {
  const { id } = await params
  const { topic } = await getTopic(id)

  return (
    <EditTopicForm
      id={topic._id}
      title={topic.title}
      description={topic.description}
    />
  )
}
