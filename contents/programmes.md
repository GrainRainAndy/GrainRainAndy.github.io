#### Research on AI-Based Pronunciation Recognition for Patients with Speech Disorders

This was an SRT (Student Research Training) project aimed at developing customized speech recognition models for patients undergoing speech rehabilitation. My contributions included designing multiple sets of speech collection texts tailored for such patients, participating in the establishment of data processing standards and preprocessing, executing preliminary transfer learning based on existing models(MASR),  and joining in the exploration of approaches to address data scarcity. In particular, I was involved in proposing and testing an idea to first expand the dataset with a GAN model before applying transfer learning.

Although due to time constraints I did not follow through to the final completion, under the guidance of a postdoctoral researcher, I systematically studied the fundamentals of deep learning still. My learning process was supported by the well-known textbook Deep Learning from Scratch, where I gained knowledge of MLPs, CNNs, and various training techniques. I also practiced by reading source code and reproducing research, implementing MASR (a gated CNN-based speech recognition model) and GANs, and developed a basic understanding of more advanced techniques such as BERT, LSTMs, and Transformers.

#### Intelligent Inspection System with Multi-Camera and UAV Collaboration Based on Computer Vision [[GitHub]](https://github.com/GrainRainAndy/SMSP-SmartMobileSensingPatrol)

This project was part of a competition organized by the Department of Industrial Engineering, where the core task was to implement object detection, path planning, and system integration. I was mainly responsible for the object detection and system integration modules. For detection, I trained YOLO models (experimenting with YOLOv8, YOLOv10, and YOLOv11, with YOLOv11 ultimately selected) and achieved high recognition and accuracy rates on single-camera inputs (over 95% and 90%, respectively).

On the integration side, I focused on coordinate alignment and collaborative processing across multiple cameras, and developed a simple yet fully functional UI using Tkinter, which became a highlight in the competition. Our team finished second place, with only a one-point difference from the top score (out of 100).

#### Local AI Assistant Deployment with LocalAI and Gradio [[GitHub]](https://github.com/GrainRainAndy/AI-Assistant-SMSP)

This project was my final assignment for the Programming Practice course, where we built a locally deployed multimodal AI agent using LocalAI and Gradio. Following the course framework, the system supported multiple functions, including chat, streaming responses, web search, webpage summarization, image generation, document summarization, and image classification.

My main contributions included debugging the framework, implementing the chat function, and developing the image classification task. Together with prior knowledge of prompt engineering, I became skilled in API calls for large models and in building browser-based interfaces. The classification task was implemented with a fully hand-written optimized LeNet-5 (without relying on mainstream frameworks). Through this project, I also gained practical experience with Docker containers.
