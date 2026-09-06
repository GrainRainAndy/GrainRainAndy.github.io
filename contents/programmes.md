### Agentic Infra Internship \[at\] ModelBest [[GitHub]](https://github.com/OpenBMB/ForgeTrain)

<p class="entry-meta">Beijing · <time datetime="2026-06">June 2026</time> – Present</p>

Mainly focused on **ForgeTrain**, a project that uses autonomous agent loops to generate LLM pretraining frameworks end to end, tailored to specific models and hardware. Its supporting harness guides the process through constraints, evaluation gates, and execution guidance. I contribute to the design and optimization of this harness, with primary responsibility for its **MoE support**: extending the team's dense-model foundation with MoE-specific operators and pretraining techniques to support mainstream MoE models. This work has been applied in production for the company's next-generation models. I also improve the harness architecture and infrastructure, introduce **per-microbatch bitwise acceptance gates, optimize hierarchical hash caching and capture mechanisms, and refine context and prompts**. Together, these changes reduced the time needed to generate a bitwise-aligned framework that meets performance requirements from **60+ hours to roughly 20+ hours**.

Besides ForgeTrain, I've gained experience in **profiling and optimizing LLM pretraining in Megatron**, including system-level performance optimization for MoE models on **8×H100 GPUs**. I built DeepEP from source and integrated it with Megatron's flex dispatcher, and combined permute, router, and Transformer Engine (TE) cross-entropy fusion with a search over recomputation and microbatch configurations. These efforts increased **model FLOPs utilization (MFU) from 11.64% to 23%+**, a relative improvement of over 100%.

I also participate in the team's collaboration with external institution, implementing and optimizing an inference engine for **Qwen3.8-27B** in environment of supercomputer.

### Small Language Model Inference Optimization on Edge Devices

<p class="entry-meta"><time datetime="2025-11">November 2025</time> – <time datetime="2026-07">July 2026</time></p>

This was an SRT (Student Research Training) project focused on small language model inference on edge devices. My main responsibility was **performance measurement and analysis using LiteRT**, investigating how models execute on variant mobile hardware and runtime frameworks.

I deployed models on **Android devices with Qualcomm Snapdragon processors**, collected runtime data, and profiled execution at the operator level. In particular, I investigated bottlenecks in operators such as convolution and attention, and analyzed execution efficiency across different hardware configurations.

### Two-Stage Quantitative Trading Model with DeepLOB and XGBoost [[GitHub]](https://github.com/GrainRainAndy/BDMI-Quant)

<p class="entry-meta"><time datetime="2025-12">December 2025</time> – <time datetime="2026-01">January 2026</time></p>

This project was part of the AI Quantitative Model Challenge and the Big Data and Machine Intelligence course. I built a model to predict the direction of future mid-price movements from **high-frequency limit order book (LOB) data**. The data pipeline processed three-second tick data and extracted features including trade prices, transaction values, and prices and volumes at the top five order book levels.

I designed a **two-stage DeepLOB + XGBoost model**, combining deep learning for temporal feature extraction with gradient-boosted trees for structured modeling. On the project dataset, the model achieved an **average PnL of 23.263 basis points (label_20)**, and the project placed **third in the competition**.

### Intelligent Inspection System with Multi-Camera and UAV Collaboration Based on Computer Vision [[GitHub]](https://github.com/GrainRainAndy/SMSP-SmartMobileSensingPatrol)

<p class="entry-meta"><time datetime="2025-05">May 2025</time></p>

This project was part of a competition organized by the Department of Industrial Engineering, where the core task was to implement object detection, path planning, and system integration. I was mainly responsible for the object detection and system integration modules. For detection, I trained YOLO models (experimenting with YOLOv8, YOLOv10, and YOLOv11, with YOLOv11 ultimately selected) and achieved high recognition and accuracy rates on single-camera inputs (over 95% and 90%, respectively).

On the integration side, I focused on coordinate alignment and collaborative processing across multiple cameras. I calibrated the cameras and computed **homography matrices for coordinate mapping across views**, integrating this with path planning to complete the system. I also developed a simple yet fully functional UI using Tkinter, which became a highlight in the competition. Our team finished in second place, with only a one-point difference from the top score (out of 100).

### Research on AI-Based Pronunciation Recognition for Patients with Speech Disorders

<p class="entry-meta"><time datetime="2024-11">November 2024</time> – <time datetime="2025-04">April 2025</time></p>

This was an SRT project aimed at developing customized speech recognition models for patients undergoing speech rehabilitation. My contributions included designing multiple sets of speech collection texts tailored for such patients, participating in the establishment of data processing standards and preprocessing, executing preliminary transfer learning based on existing models(MASR),  and joining in the exploration of approaches to address data scarcity. In particular, I was involved in proposing and testing an idea to first expand the dataset with a GAN model before applying transfer learning.

Although I did not follow through to the final completion due to time constraints, under the guidance of a postdoctoral researcher, I systematically studied the fundamentals of deep learning still. My learning process was supported by the well-known textbook Deep Learning from Scratch, where I gained knowledge of MLPs, CNNs, and various training techniques. I also practiced by reading source code and reproducing research, implementing MASR (a gated CNN-based speech recognition model) and GANs, and developed a basic understanding of more advanced techniques such as BERT, LSTMs, and Transformers.
