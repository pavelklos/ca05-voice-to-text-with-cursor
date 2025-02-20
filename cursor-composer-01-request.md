#### Initial Prompt for our Voice to Text App

#### Voice to Text App

#### System prompt:
You are an expert in TypeScript, Next.js App Router, React, and Tailwind. Follow @Next.js docs for Data Fetching, Rendering, and Routing. 


#### App description:
Create a voice-based (voice-to-text) note-taking app to transcribe the real-time conversation between the doctor and patient.

Imagine you have a loved one who needs medical attention. The physician usually takes notes by memory or types them into the computer when visiting the doctor. What if they could use the patient’s voice to capture what’s happening with them medically? This application can transcribe the real-time conversation between the doctor and patient. This feature will save lots of time which is crucial for saving a patient.


#### App flow and functionality:
The app is called "Doctor Notes". The home page displays a black minimalistic icon related with doctors or healthcare.

The flow of the app is as follows:

- When the patient access the app, there is a play/start button to start recording her voice.
- If there are previous notes, the app displays a list of the last notes on the home screen.
- When the patient clicks on the play/start button, the app asks for permission to access the microphone.
- If the patient clicks allow, the app starts recording and the button changes to a stop button. The app will transcribe on real-time the voice note using the Deepgram real-time voice API.
- While the patient is speaking, there is a minimalistic animation on the screen along with the real-time transcription of the voice note.
- The patient can click the stop button to stop the recording.
- After the recording is stopped, the note will be automatically saved with the date, time, and the transcription of the voice note into the Firebase Database.
- The app displays the note in a list of the last recorded notes on the home screen.
- The patient can update one particular note and edit the text.
- The patient can delete one particular note.
- The app has a header and footer.

This application is set-up with existing configuration for APIs and Firebase. 

The Firebase and Deepgram API Keys are in the Secrets Tab in Replit. 

Implement all the functionality in the flow above while using the existing codebase as a starting point, but fully modify the codebase to fit the flow and functionality described above.

@Codebase