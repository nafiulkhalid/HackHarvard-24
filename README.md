# HackEnzyme - Enzyme Sequence Predictor

https://github.com/user-attachments/assets/17aa65aa-b3a2-41f3-808d-cfedd66ce82d

---

HackEnzyme is a bioinformatics tool designed to predict enzyme sequences using chemical structure inputs in SMILES format. The project provides researchers and students with a platform to explore and analyze enzyme structures, enabling the understanding of their functions. This repository contains the source code for the tool, which offers interactive input fields, outputs predicted sequences, and displays enzyme visualizations.

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)

## Features

- **SMILES Input**: Accepts chemical structures in SMILES format for enzyme sequence prediction.
- **Interactive Interface**: Users can upload files, provide keywords, and visualize predictions.
- **Enzyme Visualization**: Generates protein sequences with corresponding images and visual outputs.
- **Typewriter Effect**: Outputs enzyme sequences dynamically using a typewriter animation for better readability.
- **Dark Mode Support**: Seamless transition to dark mode for better user experience in low-light environments.
- **Prediction Models**: Uses pre-trained machine learning models to predict enzyme sequences based on input.

## Technologies Used

- **HTML5, CSS3, JavaScript**: Front-end structure and styling.
- **Bootstrap 5**: For responsive design and UI components.
- **JavaScript Libraries**: Handling dynamic behavior, including the typewriter effect and input/output interactions.
- **3Dmol.js**: For rendering 3D visualizations of enzyme structures.
- **SMILES Chemical Representation**: For accepting enzyme structure input.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/HackEnzyme.git
    ```

2. Navigate to the project directory:
    ```bash
    cd HackEnzyme
    ```

3. Install dependencies (for local development):
    ```bash
    npm install
    ```

4. Open the project locally in a browser by running the following command:
    ```bash
    open index.html
    ```

## Usage

1. **Upload Enzyme Structure**: 
    - In the "Input Data" section, upload a `.pdb` file containing the enzyme structure.
  
2. **Enter Keywords and Subtraits**:
    - Provide relevant keywords (comma-separated) and any subtraits that describe the enzyme's behavior.

3. **Click 'Predict Sequence'**:
    - Once the inputs are provided, click the "Predict Sequence" button to generate the predicted sequence.

4. **Visualize Output**:
    - The enzyme sequence will be displayed dynamically using the typewriter effect, and a corresponding image will be shown.

5. **Dark Mode**:
    - Toggle dark mode using the switch in the navigation bar for a more comfortable viewing experience in low-light settings.

