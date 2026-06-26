# Generic Web API for LLM Integration

A flexible Node.js web API that allows you to create LLM-powered applications by editing a Markdown prompt file and a small static web UI.

## Features

- 🎯 **Generic Design**: One API endpoint for any LLM application
- 📝 **Markdown Prompts**: Define your application logic in `prompt.md` or `prompts/*.md`
- 🔄 **Variable Substitution**: Automatic replacement of `${variable}` placeholders
- 🤖 **Multi-Provider**: Supports OpenAI and Google Gemini
- ⚡ **Prompt Switching**: Switch applications with `promptKey` in the request body

## Quick Start

### 1. Installation

```bash
npm install
```

### 2. Environment Setup

Copy `.env.example` to `.env.local` and set your API key:

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
# For OpenAI (default)
OPENAI_API_KEY=your_openai_api_key_here

# For Gemini (if switching)
GEMINI_API_KEY=your_gemini_api_key_here

PORT=8080
```

> `.env.local` holds your real keys and is git-ignored. Do not commit it.

### 3. Configure LLM Provider

Set the provider and model in `.env.local`:

```env
LLM_PROVIDER=openai
OPENAI_MODEL=gpt-5.5

# or
LLM_PROVIDER=gemini
GEMINI_MODEL=gemini-3.5-flash
```

### 4. Start Server

```bash
npm start
```

Visit `http://localhost:8080`

## How It Works

### Architecture

```
Client (quiz.html / bouquet.html) → POST /api/ → server.js → LLM → Response
                                                   ↓
                                           promptKey template
```

### Variable Substitution

The API automatically replaces variables in the selected prompt template with request data:

**prompt.md:**
```markdown
Create ${count} questions about ${topic}.
Format: JSON array
```

**Request:**
```json
{
  "promptKey": "default",
  "count": 5,
  "topic": "JavaScript"
}
```

**Result:** Variables `${count}` and `${topic}` are replaced with actual values.

### API Endpoint

**POST** `/api/`

**Request Body:**
```json
{
  "promptKey": "bouquet",
  "title": "My Quiz",
  "count": 5,
  "any_variable": "value"
}
```

**Response:**
```json
{
  "title": "My Quiz",
  "data": [...]
}
```

## Example Applications

### 1. IT Passport AI Study Coach (Included)

**Files:**
- `prompts/it-passport.md` - Defines quiz, explanation, and review-point generation
- `public/quiz.html` - Study coach interface
- `public/quiz.css` - Study coach styles

**Usage:** Generate IT Passport practice questions from the selected domain, difficulty, weak areas, and learning goal. Each generated question includes:

- category and topic tags
- four answer choices
- correct answer index
- explanation
- review point
- wrong-answer review flow

### 2. Bouquet Concierge (Included)

**Files:**
- `prompts/bouquet.md` - Defines bouquet recommendation logic
- `public/bouquet.html` - Bouquet planner interface
- `public/bouquet.css` - Bouquet planner styles

**Usage:** Suggest bouquets from occasion, recipient, season, budget, colors, mood, flower preferences, and message. Each recommendation includes:

- bouquet concept
- seasonal fit
- color palette
- recommended flowers with flower-language notes
- wrapping and budget guidance
- care tips
- message-card text
- order phrase for a florist

### 3. Translation App (Example)

**prompt.md:**
```markdown
# Translation Service

Translate the following text to ${target_language}:

"${text}"

Return only the translated text.
```

**Request:**
```json
{
  "text": "Hello world",
  "target_language": "Japanese"
}
```

### 4. Code Review App (Example)

**prompt.md:**
```markdown
# Code Review Assistant

Review this ${language} code and provide feedback:

```${language}
${code}
```

Provide:
1. Issues found
2. Suggestions for improvement
3. Best practices
```

**Request:**
```json
{
  "language": "Python",
  "code": "def hello():\n    print('world')"
}
```

## File Structure

```
generic-webapi/
├── server.js          # Generic API server (no changes needed)
├── prompt.md          # Application-specific prompt template
├── prompts/           # Prompt templates selectable with promptKey
│   ├── bouquet.md
│   └── it-passport.md
├── package.json       # Dependencies
├── .env.example       # Environment variables template
├── public/            # Static files
│   ├── bouquet.html  # Bouquet concierge
│   ├── bouquet.css   # Bouquet concierge styles
│   ├── quiz.html     # IT Passport AI study coach
│   ├── quiz.css      # Study coach-specific styles
│   └── style.css     # Shared styles
└── README.md         # This file
```

## Creating New Applications

1. **Add a prompt file** - Define your application logic and variables in `prompts/`
2. **Register the prompt** - Add the file to `PROMPT_FILES` in `server.js`
3. **Create client HTML** - Build your user interface in `public/`
4. **Send requests** - Include `promptKey` and any variables defined in the prompt

After registering the prompt once, the client can send any variables defined in that prompt.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini API key | Yes (if using Gemini) |
| `OPENAI_API_KEY` | OpenAI API key | Yes (if using OpenAI) |
| `PORT` | Server port | No (default: 8080) |

## LLM Provider Configuration

### Switch to OpenAI (default)

Set OpenAI configuration in `.env.local`:
```env
LLM_PROVIDER=openai
OPENAI_API_KEY=your_key_here
OPENAI_MODEL=gpt-5.5
```

### Switch to Gemini

Set Gemini configuration in `.env.local`:
```env
LLM_PROVIDER=gemini
GEMINI_API_KEY=your_key_here
GEMINI_MODEL=gemini-3.5-flash
```

## Development

### Run with auto-restart:
```bash
npm run dev
```

### Supported Models

**OpenAI:**
- `gpt-5.5` (default)

**Gemini:**
- `gemini-3.5-flash`

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
