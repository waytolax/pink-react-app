import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {media} from '../UI/media';
import Article from './Article';
import Loader from '../UI/Loader';
import {onLike, fetchArticles, timeSince} from '../../state/actions/photoActions';

const StyledGallery = styled.section`
    color: #283645;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;

    & > p{
        padding: 45px 35px 50px;
		margin: 0;
		line-height: 30px;
		text-align: center;
    }

    ${media.tablet`
        & > p{
            padding: 90px 55px 75px;
			font-size: 18px;
        }
    `}

    ${media.desktop`
        & > p{
            padding: 90px 55px;
            width: 580px;
			margin: 0 auto;
        }
    `}
`;

const ArticleList = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: baseline;
    padding: 0 20px;

    ${media.desktop`
        padding: 0px
        margin-left: 130px;
        margin-right: 130px;
    `}
`;

class Gallery extends Component {

    componentDidMount() {
        this.props.fetchArticles();
    }

    renderBestArticle () {
        return this.props.articles.map(post => post.best
            ? (
                <Article
                    id={post.id}
                    key={post.id}
                    name={post.name}
                    time={this.props.timeSince(post.time)}
                    text={post.text}
                    likes={post.likes}
                    liked={post.liked}
                    image={post.image}
                    best={post.best}
                    onClick={this.props.onLike}
                />
                )
            : null
        );
    }

    renderArticles () {
        return this.props.articles.map(post => !post.best
            ? (
                <Article
                    id={post.id}
                    key={post.id}
                    name={post.name}
                    time={this.props.timeSince(post.time)}
                    text={post.text}
                    likes={post.likes}
                    liked={post.liked}
                    image={post.image}
                    best={post.best}
                    onClick={this.props.onLike}
                    styles={post.styles}
                />
                )
            : null
        );
    }

    render () {
        return (
            <StyledGallery>
                <h2 className="visually-hidden" tabIndex="0">Галерея</h2>
                <p tabIndex="0">Взгляните на фотографии, которые выкладывают пользователи! Видите, как не хватает ваших?</p>

                {
                    this.props.loading
                        ? <Loader />
                        : this.renderBestArticle()
                }

                <ArticleList>

                    {this.renderArticles()}

                </ArticleList>

            </StyledGallery>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles: state.photo.articles,
        loading: state.photo.loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onLike: (e) => dispatch(onLike(e)),
        timeSince: (date) => timeSince(date),
        fetchArticles,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
