// https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
  const infoList = [];
  const banList = [];

  id_list.map((id) => {
    infoList.push({
      id,
      report: new Set(),
      reportedBy: new Set(),
      mailCount: 0,
    });
  });

  for (const reportElement of report) {
    const [reporter, reported] = reportElement.split(' ');
    for (const info of infoList) {
      if (info.id === reporter) info.report.add(reported);
      if (info.id === reported) info.reportedBy.add(reporter);
    }
  }

  for (const info of infoList) {
    if (info.reportedBy.size >= k) banList.push(info.id);
  }

  for (const bannedUser of banList) {
    for (const info of infoList) {
      if (info.report.has(bannedUser)) ++info.mailCount;
    }
  }

  return infoList.map((info) => info.mailCount);
}
