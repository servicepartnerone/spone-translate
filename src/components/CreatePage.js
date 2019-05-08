import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
import { DRAFTS_QUERY } from './DraftsPage';

const CreatePage = ({ history }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <Mutation
      mutation={CREATE_DRAFT_MUTATION}
      update={(cache, { data }) => {
        const { drafts } = cache.readQuery({ query: DRAFTS_QUERY });
        cache.writeQuery({
          query: DRAFTS_QUERY,
          data: { drafts: drafts.concat([data.createDraft]) }
        });
      }}
    >
      {(createDraft, { data, loading, error }) => {
        return (
          <div className="pa4 flex justify-center bg-white">
            <form
              onSubmit={async e => {
                e.preventDefault();

                await createDraft({
                  variables: { title, content }
                });
                history.replace('/drafts');
              }}
            >
              <h1>Create Draft</h1>
              <input
                autoFocus
                className="w-100 pa2 mv2 br2 b--black-20 bw1"
                onChange={e => setTitle(e.target.value)}
                placeholder="Title"
                type="text"
                value={title}
              />
              <textarea
                className="db w-100 ba bw1 b--black-20 pa2 br2 mb2"
                cols={50}
                onChange={e => setContent(e.target.value)}
                placeholder="Content"
                rows={8}
                value={content}
              />
              <input
                className={`pa3 bg-black-10 bn ${content && title && 'dim pointer'}`}
                disabled={!content || !title}
                type="submit"
                value="Create"
              />

              <button type="button" className="f6 pointer" onClick={history.goBack}>
                or cancel
              </button>
            </form>
          </div>
        );
      }}
    </Mutation>
  );
};

const CREATE_DRAFT_MUTATION = gql`
  mutation CreateDraftMutation($title: String!, $content: String!) {
    createDraft(title: $title, content: $content) {
      id
      title
      content
    }
  }
`;

export default withRouter(CreatePage);
