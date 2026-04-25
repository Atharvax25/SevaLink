function serializeTask(task, currentUserId) {
  const taskObject = task.toObject ? task.toObject() : task;
  const currentApplication = currentUserId
    ? (taskObject.applications || []).find(
        (application) => String(application.volunteer) === String(currentUserId)
      )
    : null;

  return {
    ...taskObject,
    hasApplied: Boolean(currentApplication),
    currentUserApplicationStatus: currentApplication?.status || null,
  };
}

module.exports = {
  serializeTask,
};
