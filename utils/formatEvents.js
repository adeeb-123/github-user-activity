function formatEvent(event) {
  switch (event.type) {
    case "PushEvent":
      return `Pushed ${event.payload.commits.length} commit(s) to ${event.repo.name}`;

    case "WatchEvent":
      return `Starred ${event.repo.name}`;

    case "ForkEvent":
      return `Forked ${event.repo.name}`;

    case "IssuesEvent":
      return `${event.payload.action} an issue in ${event.repo.name}`;

    case "IssueCommentEvent":
      return `Commented on an issue in ${event.repo.name}`;

    case "PullRequestEvent":
      return `${event.payload.action} a pull request in ${event.repo.name}`;

     case "CreateEvent":
      return `Created ${event.payload.ref_type} ${event.payload.ref || ""} in ${event.repo.name}`;

    case "DeleteEvent":
      return `Deleted ${event.payload.ref_type} ${event.payload.ref} in ${event.repo.name}`;


    default:
      return `${event.type} in ${event.repo.name}`;
  }
}


export default formatEvent