document.getElementById("playbook-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const persona = document.getElementById("persona").value.trim();
  const goal = document.getElementById("goal").value;
  if (!persona || !goal) return;
  const content = generatePlaybook(persona, goal);
  document.getElementById("result-content").innerHTML = content;
  document.getElementById("output").classList.remove("hidden");
});

document.getElementById("download-btn").addEventListener("click", function () {
  const element = document.createElement("a");
  const content = document.getElementById("result-content").innerHTML;
  const blob = new Blob([content], { type: "text/html" });
  element.href = URL.createObjectURL(blob);
  element.download = "tech-job-outreach-playbook.html";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
});

function generatePlaybook(persona, goal) {
  let intro = `<p><strong>Target Job Title:</strong> ${persona}</p>`;
  let goalDesc = {
    "book-call": "Your goal is to request an informational interview with a professional currently in the role you're pursuing.",
    "introduce-product": "Your goal is to pitch yourself as a candidate by highlighting your skills and fit for the role.",
    "follow-up-demo": "Your goal is to follow up with a recruiter or company rep after meeting at a career fair or event."
  };
  let firstTouch = `
    <h3>1. First-Touch Message</h3>
    <p>Hi ${persona},<br><br>
    I'm a college student aspiring to break into tech sales, and your role really stood out to me. I'd love to learn about your journey and hear any advice you might have. Would you be open to a quick 15-minute chat this week?</p>
  `;
  let followUps = `
    <h3>2. Follow-Up Sequence</h3>
    <ul>
      <li><strong>+2 days:</strong> “Just checking back in—I'd really appreciate the chance to connect and learn from your experience.”</li>
      <li><strong>+5 days:</strong> “I came across [recent company/project/update] and it made me even more interested in your team. Would love to hear about it!”</li>
      <li><strong>+8 days:</strong> “No worries if now isn’t a good time. I’ll keep following your work—thanks either way!”</li>
    </ul>
  `;
  let objections = `
    <h3>3. Objection Handling</h3>
    <p><strong>“We're not hiring right now.”</strong><br>Totally understand—I'm not necessarily looking for a job right now, just trying to learn and build connections in the space.</p>
    <p><strong>“I don’t have time.”</strong><br>I understand you’re busy! Even a quick message reply or resource recommendation would mean a lot.</p>
  `;
  let talkTrack = `
    <h3>4. Talk Track (Phone)</h3>
    <p>“Hi ${persona}, this is [Your Name]. I know you’re busy so I’ll be brief—I’m a college student interested in tech sales and was hoping to hear how you got your start. Would you have a few minutes to share your path?”</p>
  `;
  return `${intro}<p>${goalDesc[goal]}</p>${firstTouch}${followUps}${objections}${talkTrack}`;
}
